import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollButton from './components/ScrollButton.js'; 
import './App.css';
import MainPage from './main_page.js'
import Panel from './panel.js'
import Footer from './footer.js'
import ServerList from './ServerList.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={(props) => (<><Panel />,<MainPage />,<Footer />,<ScrollButton/></>)}/>
        <Route exact path='/serverlist' Component={(props) => (<><Panel />,<ServerList />,<Footer />,<ScrollButton/></>)} />
      </Routes> 
    </Router>
  );
}
export default App;
