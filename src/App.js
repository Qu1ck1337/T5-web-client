import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollButton from "./components/ScrollButton.js";
import "./styles/App.css";
import MainPage from "./pages/MainPage.js";
import Panel from "./components/panel.js";
import Footer from "./components/footer.js";
import ServerList from "./pages/ServerList.js";
import Documentation from "./pages/Documentation.js";
import Commands from "./pages/Commands.js";
import Statistics from "./pages/Statistics.js";
import ServerManager from "./pages/ServerManager.js";
import SMModer from "./pages/SMModer.js";
import SMAudit from "./pages/SMAudit.js";
import SMComms from "./pages/SMComms.js";
import SMMsg from "./pages/SMMsg.js";
import SMRating from "./pages/SMRating.js";
import SMmeta from "./pages/SMmeta.js";
import SMMain from "./pages/SMMain.js";

function App() {
  return (
    <>
      <Panel />
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            Component={(props) => (
              <>
                <MainPage />
              </>
            )}
          />
          <Route
            exact
            path="/serverlist"
            Component={(props) => (
              <>
                <ServerList />
              </>
            )}
          />
          <Route
            exact
            path="/documentation"
            Component={(props) => (
              <>
                <Documentation />
              </>
            )}
          />
          <Route
            exact
            path="/commands"
            Component={(props) => (
              <>
                <Commands />
              </>
            )}
          />
          <Route
            exact
            path="/statistics"
            Component={(props) => (
              <>
                <Statistics />
              </>
            )}
          />
          <Route
            exact
            path="/server_manager"
            Component={(props) => (
              <>
                <ServerManager />
              </>
            )}
          />
          <Route
            path="/server_manager/SMMain"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMMain />
              </>
            )}
          />
          <Route
            path="/server_manager/SMModer"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMModer />
              </>
            )}
          />
          <Route
            path="/server_manager/SMAudit"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMAudit />
              </>
            )}
          />
          <Route
            path="/server_manager/SMComms"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMComms />
              </>
            )}
          />
          <Route
            path="/server_manager/SMMsg"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMMsg />
              </>
            )}
          />
          <Route
            path="server_manager/SMRating"
            exact
            Component={(props) => (
              <>
                <SMmeta />
                <SMRating />
              </>
            )}
          />
        </Routes>
      </Router>
      <Footer /> <ScrollButton />
    </>
  );
}
export default App;
