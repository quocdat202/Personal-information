import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from "./Pages/Home/Home";
function App() {
  return (
    <Router>
      <Home />
      <Route path="/home" exact component={() => <Home />} ></Route>
    </Router>
  )
}

export default App;
