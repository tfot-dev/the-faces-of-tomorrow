import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Admin } from './features/Admin/Admin';
import { YourStory } from './features/YourStory/YourStory';
import { Home } from './features/Home/Home';
import { MainLayoutRoute } from './features/LayoutRoutes/MainLayoutRoute';
import { HomeLayoutRoute } from './features/LayoutRoutes/HomeLayoutRoute';
import { theme } from './config/theme';

export const App: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>();

    return (
        <ThemeProvider theme={theme(!!darkMode)}>
            <Router>
                <Switch>
                    <MainLayoutRoute path="/yourstory" component={YourStory} onThemeToggle={setDarkMode} />
                    <MainLayoutRoute path="/admin" component={Admin} onThemeToggle={setDarkMode} />
                    <HomeLayoutRoute exact path="/" component={Home} onThemeToggle={setDarkMode} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
