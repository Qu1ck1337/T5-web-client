import './panel.css'
import docs_png from '../assets/images/docs.png';
import commands_png from '../assets/images/commands.png';
import stats_png from '../assets/images/stats.png';
import login_png from '../assets/images/login.png';
import panel_logo from '../assets/images/t5logo.png'
function panel(){
    return(
        <div className='panel'>
            <a id='panel_home' href='/'><img id='panel_logo' src={panel_logo}></img></a>
            <button id="docs"><img src={docs_png} className='left_panel_img'></img><a id='panel_link' href='/documentation'>ДОКУМЕНТАЦИЯ</a></button>
            <button id="commands"><img src={commands_png} className='left_panel_img'></img><a id='panel_link' href='/commands'>КОМАНДЫ</a></button>
            <button id="stats"><img src={stats_png} className='left_panel_img'></img><a id='panel_link' href='/statistics'>СТАТИСТИКА</a></button>
            <button id="login"><img src={login_png} className='right_panel_img'></img><a id='panel_link' href='/login'>ВОЙТИ</a></button>
        </div>
    )
}
export default panel;