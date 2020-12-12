import React from 'react';
import './App.css';
import { Header } from './features/Header/Header';
import { PostContainer } from './features/Post/PostContainer';
import { PublicApi } from './features/Api/PublicApi';
import { Container, makeStyles } from '@material-ui/core';
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
        <Router>
            <Header />
            <Container className={classes.container}>
                <Switch>
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/">
                        <PublicApi>
                            <PostContainer />
                        </PublicApi>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};
