import login_png from "../assets/images/login.png";
import axios from "axios";
import {useState} from "react";

function LoginButton(){
    const [avatar, setAvatar] = useState(new URL(login_png))
    const [linkHref, setLinkHref] = useState('https://discord.com/oauth2/authorize?client_id=1225730012473196595&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=identify+guilds')

    window.onload = () => {
        const code = (new URL(window.location)).searchParams.get('code')

        if (code) {
            axios.post('http://localhost:8000/login', {
                code: code
            })
                .then(response => {
                    response = response.data;
                    setAvatar(`https://cdn.discordapp.com/avatars/${response["id"]}/${response["avatar"]}`);
                    setLinkHref(`/serverlist`)
                    document.querySelector(".login_link").innerText = response["username"];
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <button id="login">
            <img src={avatar} className='right_panel_img'></img>
            <a id='panel_link' className="login_link" href={linkHref}>ВОЙТИ</a>
        </button>
    )
}

export default LoginButton;