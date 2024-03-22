import './panel.css'
import docs_png from './assets/images/docs.png';
import commands_png from './assets/images/commands.png';
import stats_png from './assets/images/stats.png';
import login_png from './assets/images/login.png';
function panel(){
    return(
        <div className='panel'>
            <button id="docs"><img src={docs_png} className='left_panel_img'></img><p>ДОКУМЕНТАЦИЯ</p></button>
            <button id="commands"><img src={commands_png} className='left_panel_img'></img><p>КОМАНДЫ</p></button>
            <button id="stats"><img src={stats_png} className='left_panel_img'></img><p>СТАТИСТИКА</p></button>
            <button id="login"><img src={login_png} className='right_panel_img'></img><p>ВОЙТИ</p></button>
        </div>
    )
}
export default panel;