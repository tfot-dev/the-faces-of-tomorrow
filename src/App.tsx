import React from 'react';
import './App.css';
import {Login} from "./features/login/Login";

export const App = () => {
    return (
        <div className="App">
            The faces of tomorrow
            <Login/>
        </div>
    );
}
