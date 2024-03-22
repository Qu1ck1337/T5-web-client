import './ServerList.css'
function serverlist(){
    return(
        <div className='serv_list'>
            <div className='serv_list_btns'>
                <button id="serv1"><img id="ds_logo" src={discord_logo}></img><p>T5DEV</p></button>
                <button id="serv2"><img id="ds_logo" src={discord_logo}></img><p>T5COMMUNITY</p></button>
                <button id="serv3"><img id="ds_logo" src={discord_logo}></img><p>T5FUN</p></button>
            </div>
        </div>
    )
}
export default serverlist;