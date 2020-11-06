import React from 'react';
import './App.css';
import { Header } from './features/Header/Header';
import { Api } from './features/Api/Api';
import { Post } from './features/Post/Post';

export const App: React.FC = () => (
    <div className="App">
        <Api>
            <Header />
            <Post />
        </Api>
    </div>
);
