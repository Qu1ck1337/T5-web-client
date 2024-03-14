import './panel.css'
import docs_png from './images/docs.png';
import commands_png from './images/commands.png';
import stats_png from './images/stats.png';
import login_png from './images/login.png';
function panel(){
    return(
        <div className='panel'>
            <div id="docs"><img src={docs_png} className='left_panel_img'></img><p>ДОКУМЕНТАЦИЯ</p></div>
            <div id="commands"><img src={commands_png} className='left_panel_img'></img><p>КОМАНДЫ</p></div>
            <div id="stats"><img src={stats_png} className='left_panel_img'></img><p>СТАТИСТИКА</p></div>
            <div id="login"><img src={login_png} className='right_panel_img'></img><p>ВОЙТИ</p></div>
        </div>
    )
}
export default panel;