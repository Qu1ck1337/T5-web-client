import discord_logo from './images/discord_logo.png'
import './ServerList.css'
import React, {Component} from 'react';
export default class ServerList extends Component{
    render(){
        return(
            <div className='serv_list'>
                <div id='serv_list_title'>
                    <h1>Ваши сервера Discord</h1>
                </div>
                <div className='serv_list_btns'>
                    <button id="serv1">
                        <div className='serv_info'>
                            <img id="ds_logo" src={discord_logo}></img>
                            <p>T5-DEV</p>
                        </div>
                        <p className='serv_online'>в сети:</p>
                    </button>

                    <button id="serv2">
                        <div className='serv_info'>
                            <img id="ds_logo" src={discord_logo}></img>
                            <p>T5-COMMUNITY</p>
                        </div>
                        <p className='serv_online'>в сети:</p>
                    </button>

                    <button id="serv3">
                        <div className='serv_info'>
                            <img id="ds_logo" src={discord_logo}></img>
                            <p>T5-FUN</p>
                        </div>
                        <p className='serv_online'>в сети:</p>
                    </button>
                </div>
            </div>
        )
    }
}
// function ServerList(){
//     return(
//         <p>awdawd</p>
        
//     )
// }
// export default ServerList;