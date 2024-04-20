import React, {Component} from 'react';
import './SM_list.css'
export default class SM_list extends Component{
    render(){
        return(
            <div className='SM_list'>
                <div className='SM_list'>
                    <a id='sml_main' href='/server_manager/SMMain'>ОБЩИЕ</a>
                    <a id='sml_moder' href='/server_manager/SMModer'>МОДЕРИРОВАНИЕ</a>
                    <a id='sml_audit' href='/server_manager/SMAudit'>АУДИТ</a>
                    <a id='sml_comms' href='/server_manager/SMComms'>КОМАНДЫ</a>
                    <a id='sml_msg' href='/server_manager/SMMsg'>ОПОВЕЩЕНИЯ</a>
                    <a id='sml_rating' href='/server_manager/SMRating'>РЕЙТИНГ</a>
                </div>
            </div>
        )
    }
}