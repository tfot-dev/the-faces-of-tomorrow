import React from 'react';
import './App.css';
import { Header } from './features/Header/Header';
import { PostContainer } from './features/Post/PostContainer';
import { InstagramApi } from './features/Api/InstagramApi';
import { Container, makeStyles } from '@material-ui/core';
import { EmailContainer } from './features/Email/EmailContainer';
import { AuthenticatedApi } from './features/Api/AuthenticatedApi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Admin } from './features/Admin/Admin';

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
});

export const App: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Container className={classes.container}>
                <Router>
                    <Switch>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/">
                            <InstagramApi>
                                <PostContainer />
                            </InstagramApi>
                            <AuthenticatedApi>
                                <EmailContainer />
                            </AuthenticatedApi>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    );
};
