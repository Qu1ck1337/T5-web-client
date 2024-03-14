import './main_page.css'
import discord_logo from './images/discord_logo.png'
import moderation_png from './images/moderation.png'
import verification_png from './images/verification.png'
import economy_png from './images/economy.png'
import options_png from './images/options.png'
import media_png from './images/media.png'

function main_page(){
    return(
        <div className="main_page">
            <div className='main'>
                <div className="header">
                    <h1 id="main_title">T5-BOT</h1>
                    <div id="line1"></div>
                    <p>Прогрессивное решение для твоего Discord-сервера!</p>
                </div>

                <div className="auth">
                    <div className="auth_buttons">
                        <button id="add_to_server"><img id="ds_logo" src={discord_logo}></img><p>ДОБАВИТЬ В DISCORD</p></button>
                        <a id="main_info" href="#moderation"><div><p>ПОДРОБНЕЕ...</p></div></a>
                    </div>
                    <div id="line2"></div>
                </div>

                <div className="description">
                    <div id="moderation">
                    <div id="left_desc_txt">
                        <p id='desc_titles'>Модерация</p>
                        <p id='desc_text'>
                            Обеспечьте безопасность своего Discord-сервера благодаря множеству функций модерации, таких как временные и постоянные баны, кики, мьюты участников.<br/>
                            Также T5-BOT включает в себя функции фильтрации нежелательных сообщений, флуда и т.д.
                        </p>
                    </div>
                    <img id="moderation_png" src={moderation_png}></img>
                    </div>
                    <div className="economy">
                    <img id="economy_png" src={economy_png}></img>
                    <div id="right_desc_txt">
                        <p id='desc_titles'>Экономика</p>
                        <p id='desc_text'>
                            Награждайте самых активных участников вашего сервера с помощью системы рейтинга и достижений. Пусть каждый поощряет друг друга и отслеживает свою активность на сервере.<br/>
                            Ваше сообщество бесценно!
                        </p>
                    </div>
                    </div>
                    <div className="verification">
                    <div id="left_desc_txt">
                        <p id='desc_titles'>Верификация</p>
                        <p id='desc_text'>
                            Обеспечьте дополнительную безопасность своего сервера благодаря проверке пользователей и сторонних приложений с помощью наших инструментов верификации.
                        </p>
                    </div>
                    <img id="verification_png" src={verification_png}></img>
                    </div>
                    <div className="options">
                    <img id="options_png" src={options_png}></img>
                    <div id="right_desc_txt">
                        <p id='desc_titles'>Настройки</p>
                        <p id='desc_text'>
                            Кастомизируйте свой Discord-сервер, команды и функционал бота с помощью множества расширенных настроек, входящих в T5-BOT.
                        </p>
                    </div>
                    </div>
                    <div className="media">
                    <div id="left_desc_txt">
                        <p id='desc_titles'>Медиа</p>
                        <p id='desc_text'>
                            Позвольте вашему сообществу следить за любимыми стримерами и получать актуальные новости с медиа-функционалом и командами.<br/>
                            К тому же, ваши пользователи смогут разбавить досуг любимой музыкой, используя наш плеер!
                        </p>
                    </div>
                    <img id="media_png" src={media_png}></img>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default main_page;