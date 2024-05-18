import configparser

import psycopg2 as psycopg2
import requests
import uvicorn
from fastapi import FastAPI, Request, Body
from starlette.middleware.cors import CORSMiddleware


app = FastAPI()

config = configparser.ConfigParser()
config.read("../../application.ini")

CLIENT_ID = int(config['auth']['CLIENT_ID'])
CLIENT_SECRET = config['auth']['CLIENT_SECRET']
REDIRECT_URI = config['auth']['REDIRECT_URI']

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conn = psycopg2.connect(dbname=config['db']["dbname"], user=config['db']["user"],
                        password=config['db']["password"], host=config['db']["host"])
cursor = conn.cursor()


@app.post("/login")
async def login(body=Body()):
    data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "code": body["code"],
        "grant_type": 'authorization_code',
        "redirect_uri": REDIRECT_URI,
        "scope": 'identify'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    tokenResponseData = requests.post('https://discord.com/api/oauth2/token',
                                      data=data, headers=headers)
    oauthData = tokenResponseData.json()

    headers = {
        "authorization": f'{oauthData["token_type"]} {oauthData["access_token"]}'
    }
    userResult = requests.get('https://discord.com/api/users/@me', headers=headers).json()
    userResult["token_type"] = oauthData["token_type"]
    userResult["access_token"] = oauthData["access_token"]
    print(userResult)
    return userResult

@app.post("/get_user_owned_guilds")
async def get_user_owned_guilds(body=Body()):
    headers = {
        "authorization": f'{body["token_type"]} {body["access_token"]}'
    }
    guilds = requests.get('https://discord.com/api/v6/users/@me/guilds', headers=headers).json()

    cursor.execute(f'SELECT guilds.id FROM guilds WHERE owner_id={body["user_id"]}')
    users_guilds_exists = list(map(lambda x: x[0], cursor.fetchall()))

    owned_guilds = []
    for guild in guilds:
        if guild["owner"]:
            guild["bot_in"] = int(guild["id"]) in users_guilds_exists
            owned_guilds.append(guild)
    return owned_guilds


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)