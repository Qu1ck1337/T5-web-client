import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollButton from './components/ScrollButton'; 
import './App.css';
import MainPage from './main_page.js'
import Panel from './panel.js'
import Footer from './footer.js'

function App() {
  return (
    <Fragment>
      <MainPage />
      <Panel />
      <Footer />
      <ScrollButton />
    </Fragment>
  );
}
export default App;
