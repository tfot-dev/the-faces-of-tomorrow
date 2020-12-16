import React from 'react';
import './App.css';
import { PaletteType, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Admin } from './features/Admin/Admin';
import { YourStory } from './features/YourStory/YourStory';
import { Home } from './features/Home/Home';
import { theme } from './config/theme';
import { MainLayoutRoute } from './features/LayoutRoutes/MainLayoutRoute';
import { HomeLayoutRoute } from './features/LayoutRoutes/HomeLayoutRoute';

export const App: React.FC = () => {
    const [themeMode, setThemeMode] = React.useState<PaletteType>();
    const themeConfig = theme(themeMode);

    return (
        <ThemeProvider theme={themeConfig}>
            <Router>
                <Switch>
                    <MainLayoutRoute path="/yourstory" component={YourStory} onThemeChange={setThemeMode} />
                    <MainLayoutRoute path="/admin" component={Admin} onThemeChange={setThemeMode} />
                    <HomeLayoutRoute exact path="/" component={Home} onThemeChange={setThemeMode} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
