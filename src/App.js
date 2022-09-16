import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/home.css';
import avt from './Images/avt.png';
import fb from './Images/fb.png';
import ig from './Images/ig.png';
import bg_home from './Images/bg_home.png';
import linkedin from './Images/linkedin.png';
import { NavLink, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from './Pages/Components/Projects';
import Target from './Pages/Components/Target';
import Education from './Pages/Components/Education';
import Certification from './Pages/Components/Certification';
import Other_information from './Pages/Components/Other_information';
import Panel_Main from './Pages/Panel_Main';
function App() {
  return (
    <Router>
      <div className="home">
        <div className="container">
          <div className="panel-left">
            <Home />
          </div>
          <div className="panel-right">
            <Panel_Main />
          </div>
        </div>
      </div>
    </Router>

  )
}

export default App;
