import React, {Component} from 'react';
import './ServerManager.css'
import SM_list from "../components/SM_list.js";
export default class ServerManager extends Component{
    render(){
        return(
            <div className='serverManager'>
                <div className='serverhead'>
                    <div id='servername'>
                        <h1 id='h1'>T5-DEV</h1>
                        <p>Управление сервером:</p>
                    </div>
                    <SM_list />
                </div>
                <h1 id='h1'>Общие</h1>
            </div>
        )
    }
}