import discord_logo from './images/discord_logo.png'
import serv_online_png from './images/serv_online.png'
import './ServerList.css'
import React, {Component} from 'react';
export default class ServerList extends Component{
    render(){
        return(
            <div className='serv_list'>
                <div id='serv_list_title'>
                    <h1>Ваши сервера Discord</h1>
                    {/* <div id='search_bar'>
                        <p id='search_bar_title'>Поиск</p>
                    </div> */}
                </div>
                <div className='serv_list_btns'>
                    <button id="serv1">
                        <img className='serv_img' src={discord_logo}></img>
                        <div className='serv_info'>
                            <p>T5-DEV</p>   
                            <div className='serv_online'>
                                <img id='serv_online_png' src={serv_online_png}></img>
                                <p>в сети:</p>
                            </div>
                        </div>
                    </button>

                    <button id="serv1">
                        <img className='serv_img' src={discord_logo}></img>
                        <div className='serv_info'>
                            <p>T5-COMMUNITY</p>   
                            <div className='serv_online'>
                                <img id='serv_online_png' src={serv_online_png}></img>
                                <p>в сети:</p>
                            </div>
                        </div>
                    </button>

                    <button id="serv1">
                        <img className='serv_img' src={discord_logo}></img>
                        <div className='serv_info'>
                            <p>T5-FUN</p>   
                            <div className='serv_online'>
                                <img id='serv_online_png' src={serv_online_png}></img>
                                <p>в сети:</p>
                            </div>
                        </div>
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