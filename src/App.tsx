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
import { AuthenticatedApi } from './features/Api/AuthenticatedApi';
import { PrivacyPolicy } from './features/PrivacyAndTerms/PrivacyPolicy';
import { TermsAndConditions } from './features/PrivacyAndTerms/TermsAndConditions';
import { PostViewContainer } from './features/Post/PostViewContainer';
import { SnackbarProvider } from 'notistack';
import { YourStoryPosted } from './features/YourStory/YourStoryPosted';
import { Routes } from './constants/Routes';

export const App: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>();

    return (
        <ThemeProvider theme={theme(!!darkMode)}>
            <SnackbarProvider>
                <AuthenticatedApi>
                    <Router>
                        <Switch>
                            <MainLayoutRoute
                                path={Routes.Post}
                                component={PostViewContainer}
                                onThemeToggle={setDarkMode}
                            />
                            <MainLayoutRoute path="/yourstory" component={YourStory} onThemeToggle={setDarkMode} />
                            <MainLayoutRoute
                                path={Routes.YourStoryPosted}
                                component={YourStoryPosted}
                                onThemeToggle={setDarkMode}
                            />
                            {process.env.REACT_APP_BUILD_TYPE === 'admin' && (
                                <MainLayoutRoute path={Routes.Admin} component={Admin} onThemeToggle={setDarkMode} />
                            )}
                            <MainLayoutRoute
                                exact
                                path={Routes.Privacy}
                                component={PrivacyPolicy}
                                onThemeToggle={setDarkMode}
                            />
                            <MainLayoutRoute
                                exact
                                path={Routes.TermsAndConditions}
                                component={TermsAndConditions}
                                onThemeToggle={setDarkMode}
                            />
                            <HomeLayoutRoute exact path="/" component={Home} onThemeToggle={setDarkMode} />
                        </Switch>
                    </Router>
                </AuthenticatedApi>
            </SnackbarProvider>
        </ThemeProvider>
    );
};
