import { Fragment } from 'react'; 
import ScrollButton from './components/ScrollButton'; 
import './App.css';
import MainPage from './main_page.js'
import Panel from './panel.js'
import Footer from './footer.js'

function App() {
  return (
    <Fragment>
      <Panel />
      <MainPage />
      <Footer />
      <ScrollButton />
    </Fragment>
  );
}
export default App;
