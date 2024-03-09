import { Fragment } from 'react'; 
import ScrollButton from './components/ScrollButton'; 
import { Content, Heading } from './components/Styles';
import bgimg from './background_img.png';
import img from './docs.png';
import img2 from './commands.png';
import img3 from './stats.png';
import img4 from './login.png';
import discord_logo from './images/discord_logo.png'
import moderation_png from './images/moderation.png'
import verification_png from './images/verification.png'
import economy_png from './images/economy.png'
import options_png from './images/options.png'
import media_png from './images/media.png'
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="App">
        <div className='main'>
          <div className='panel'>
            <div id="docs"><img src={img} className='left_panel_img'></img><p>ДОКУМЕНТАЦИЯ</p></div>
            <div id="commands"><img src={img2} className='left_panel_img'></img><p>КОМАНДЫ</p></div>
            <div id="stats"><img src={img3} className='left_panel_img'></img><p>СТАТИСТИКА</p></div>
            <div id="login"><img src={img4} className='right_panel_img'></img><p>ВОЙТИ</p></div>
          </div>

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
                <p>Модерация</p>
                <p>
                    Обеспечьте безопасность своего Discord-сервера благодаря множеству функций модерации, таких как временные и постоянные баны, кики, мьюты участников.<br/>
                    Также T5-BOT включает в себя функции фильтрации нежелательных сообщений, флуда и т.д.
                </p>
              </div>
              <img id="moderation_png" src={moderation_png}></img>
            </div>
            <div className="economy">
              <img id="economy_png" src={economy_png}></img>
              <div id="right_desc_txt">
                <p>Экономика</p>
                <p>
                    Награждайте самых активных участников вашего сервера с помощью системы рейтинга и достижений. Пусть каждый поощряет друг друга и отслеживает свою активность на сервере.<br/>
                    Ваше сообщество бесценно!
                </p>
              </div>
            </div>
            <div className="verification">
              <div id="left_desc_txt">
                <p>Верификация</p>
                <p>
                    Обеспечьте дополнительную безопасность своего сервера благодаря проверке пользователей и сторонних приложений с помощью наших инструментов верификации.
                </p>
              </div>
              <img id="verification_png" src={verification_png}></img>
            </div>
            <div className="options">
              <img id="options_png" src={options_png}></img>
              <div id="right_desc_txt">
                <p>Настройки</p>
                <p>
                    Кастомизируйте свой Discord-сервер, команды и функционал бота с помощью множества расширенных настроек, входящих в T5-BOT.
                </p>
              </div>
            </div>
            <div className="media">
              <div id="left_desc_txt">
                  <p>Медиа</p>
                  <p>
                      Позвольте вашему сообществу следить за любимыми стримерами и получать актуальные новости с медиа-функционалом и командами.<br/>
                      К тому же, ваши пользователи смогут разбавить досуг любимой музыкой, используя наш плеер!
                  </p>
              </div>
              <img id="media_png" src={media_png}></img>
            </div>
          </div>
        </div>
        <footer className="footer">
              <div className="footer_info">
                  <div id="links">
                      <p>- ССЫЛКИ -</p>
                      <a href="https://github.com/Qu1ck1337/T5-frontend">* GIT-Hub</a>
                  </div>
              </div>
              <div id="footer_line"></div>
              <div id="footer_author"><p>© 2024. Все права защищены.</p></div>
        </footer>
      </div>
      <ScrollButton />
    </Fragment>
  );
}
export default App;
