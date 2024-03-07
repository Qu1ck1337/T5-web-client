import bgimg from './background_img.png';
import img from './docs.png';
import img2 from './commands.png';
import img3 from './stats.png';
import img4 from './login.png';
import './App.css';

function App() {
  return (
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
      </div>
    </div>
  );
}

export default App;
