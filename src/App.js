import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollButton from './components/ScrollButton.js'; 
import './App.css';
import MainPage from './pages/MainPage.js'
import Panel from './components/panel.js'
import Footer from './components/footer.js'
import ServerList from './pages/ServerList.js';
import Documentation from './pages/Documentation.js';
import Commands from './pages/Commands.js'
import Statistics from './pages/Statistics.js'
import Login from './pages/Login.js'
import ServerManager from './pages/ServerManager.js'

function App() {
  
  return (
    <><Panel />
    <Router>
      <Routes>
        <Route path="/" exact Component={(props) => (<><MainPage /></>)}/>
        <Route exact path='/serverlist' Component={(props) => (<><ServerList /></>)} />
        <Route exact path='/documentation' Component={(props) => (<><Documentation /></>)} />
        <Route exact path='/commands' Component={(props) => (<><Commands /></>)} />
        <Route exact path='/statistics' Component={(props) => (<><Statistics /></>)} />
        {/*<Route exact path='/login' Component={(props) => (<><Login /></>)} />*/}
        <Route exact path='/server_manager' Component={(props) => (<><ServerManager /></>)} />
        {/* <Route exact path='/server_manager/moderation' Component={(props) => (<><ServerManager /></>)} /> */}
      </Routes>
    </Router>
    <Footer /> <ScrollButton/></>
  );
}
export default App;
