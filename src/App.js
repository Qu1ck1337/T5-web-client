import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollButton from './components/ScrollButton.js'; 
import './App.css';
import MainPage from './main_page.js'
import Panel from './panel.js'
import Footer from './footer.js'
import ServerList from './ServerList.js';

function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to='/'>Главная</Link>
    //         </li>
    //         <li>
    //           <Link to='/about'>О нас</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       <Route path='/about'>
    //         <ServerList />
    //       </Route>
    //       <Route path='/'>
    //         <MainPage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Fragment>
      <MainPage />
      <Panel />
      <Footer />
      <ScrollButton />
    </Fragment>
  );
}
export default App;
