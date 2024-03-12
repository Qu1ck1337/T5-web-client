import { Fragment } from 'react'; 
import ScrollButton from './components/ScrollButton'; 
import './App.css';
import MainPage from './main_page.js'

function App() {
  return (
    <Fragment>
      <MainPage />
      <ScrollButton />
    </Fragment>
  );
}
export default App;
