import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={(props) => (<><Panel />,<MainPage />,<Footer />,<ScrollButton/></>)}/>
        <Route exact path='/serverlist' Component={(props) => (<><Panel />,<ServerList />,<Footer />,<ScrollButton/></>)} />
        <Route exact path='/documentation' Component={(props) => (<><Panel />,<Documentation />,<Footer />,<ScrollButton/></>)} />
        <Route exact path='/commands' Component={(props) => (<><Panel />,<Commands />,<Footer />,<ScrollButton/></>)} />
        <Route exact path='/statistics' Component={(props) => (<><Panel />,<Statistics />,<Footer />,<ScrollButton/></>)} />
        <Route exact path='/login' Component={(props) => (<><Panel />,<Login />,<Footer />,<ScrollButton/></>)} />
      </Routes> 
    </Router>
  );
}
export default App;
