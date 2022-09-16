import React from 'react'
import { BrowserRouter as Router, useLocation, Switch, Route, useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../CSS/home.css';
import { NavLink, Link } from "react-router-dom";
import Projects from './Components/Projects';
import Target from './Components/Target';
import Education from './Components/Education';
import Certification from './Components/Certification';
import Other_information from './Components/Other_information';
import Information from './Components/Information';
export default function Panel_Main() {
    const location = useLocation();
    return (
        <TransitionGroup>
            <div className="panel-container">
                <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
                    <Switch>
                        <Route path="/" exact component={() => <Information />} ></Route>
                        <Route path="/target" exact component={() => <Target />} ></Route>
                        <Route path="/education" exact component={() => <Education />} ></Route>
                        <Route path="/projects" exact component={() => <Projects />} ></Route>
                        <Route path="/certification" exact component={() => <Certification />} ></Route>
                        <Route path="/other_information" exact component={() => <Other_information />} ></Route>
                    </Switch>
                </CSSTransition>
            </div>
        </TransitionGroup>
    )
}
