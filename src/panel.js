import './panel.css'
import docs_png from './images/docs.png';
import commands_png from './images/commands.png';
import stats_png from './images/stats.png';
import login_png from './images/login.png';
import panel_logo from './images/t5logo.png'
function panel(){
    return(
        <div className='panel'>
            <a id='panel_home' href='/'><img id='panel_logo' src={panel_logo}></img></a>
            <button id="docs"><img src={docs_png} className='left_panel_img'></img><a id='docs_link' href='/documentation'>ДОКУМЕНТАЦИЯ</a></button>
            <button id="commands"><img src={commands_png} className='left_panel_img'></img><p>КОМАНДЫ</p></button>
            <button id="stats"><img src={stats_png} className='left_panel_img'></img><p>СТАТИСТИКА</p></button>
            <button id="login"><img src={login_png} className='right_panel_img'></img><p>ВОЙТИ</p></button>
        </div>
    )
}
export default panel;