import React from "react";
import "./App.css";
import Dashboard from './views/Dashboard'
import Locations from './views/Locations'
import NavBar from './views/NavBar'
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Route path="/" exact component={Dashboard} />
            <Route path="/locations" exact component={Locations} />
        </div>
    );
}

export default App;
