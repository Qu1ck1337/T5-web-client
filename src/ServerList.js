import discord_logo from './images/discord_logo.png'
import './ServerList.css'
import React, {Component} from 'react';
import Panel from './panel';
import Footer from './footer';
export default class ServerList extends Component{
    render(){
        return(
            <div className='serv_list'>
                <div className='serv_list_btns'>
                    <button id="serv1"><img id="ds_logo" src={discord_logo}></img><p>T5-DEV</p></button>
                    <button id="serv2"><img id="ds_logo" src={discord_logo}></img><p>T5-COMMUNITY</p></button>
                    <button id="serv3"><img id="ds_logo" src={discord_logo}></img><p>T5-FUN</p></button>
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