import React, {Component} from 'react';
import './SM_list.css'
export default class SM_list extends Component{
    render(){
        return(
            <div className='SM_list'>
                <div className='SM_list'>
                    <a id='sml_main' href='/server_manager'>ОБЩИЕ</a>
                    <a id='sml_moder' href='/'>МОДЕРИРОВАНИЕ</a>
                    <a id='sml_audit' href='/'>АУДИТ</a>
                    <a id='sml_comms' href='/'>КОМАНДЫ</a>
                    <a id='sml_msg' href='/'>ОПОВЕЩЕНИЯ</a>
                    <a id='sml_rating' href='/'>РЕЙТИНГ</a>
                </div>
            </div>
        )
    }
}