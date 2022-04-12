import React from "react";
import {
    BrowserRouter as Router, Link
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Workplace from "./view/Workplace";
import Area from "./view/Area";
import Machines from "./view/Machines";
import Data from "./view/Data";


export default function Main(props) {
    const onClickHandler = (e) => {
        e.target.classList.add(".currentLink")
    }

    return (
        <Router>
            <div className="layout">
                <div className="navbar">
                    <div className="home">
                        <Link to="/" onClick={onClickHandler}><img src="machine.png"></img></Link>
                    </div>
                    <div className="menu">
                        <Link to="/machines">
                            Станки
                        </Link>

                        <Link to="/area">
                            Цех
                        </Link>

                        <Link to="/sensors">
                            Данные
                        </Link>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Workplace />}>

                        </Route>
                        <Route path="/machines" element={<Machines />}>

                        </Route>
                        <Route path="/area" element={<Area />}>

                        </Route>
                        <Route path="/sensors" element={<Data />}>

                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    )

} 