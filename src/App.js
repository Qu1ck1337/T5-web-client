import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollButton from './components/ScrollButton'; 
import './App.css';
import MainPage from './pages/main_page.js'
import Panel from './components/panel.js'
import Footer from './components/footer.js'

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
