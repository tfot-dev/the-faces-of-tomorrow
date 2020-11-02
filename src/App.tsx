import React from 'react';
import './App.css';
import {Authentication} from "./features/Auth/Authentication";

export const App = () => {
    return (

            <div className="App">
                The faces of tomorrow
                <Authentication/>
            </div>
    );
}
