import React from "react";
import "./App.css";
import Dashboard from './views/Dashboard'
import NavBar from './views/NavBar'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Dashboard />
        </div>
    );
}

export default App;
