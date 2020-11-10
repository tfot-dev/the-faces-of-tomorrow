import React from 'react';
import './App.css';
import { Header } from './features/Header/Header';
import { PostContainer } from './features/Post/PostContainer';
import { InstagramApi } from './features/Api/InstagramApi';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: 80,
    },
});

export const App: React.FC = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <Header />
            <Container className={classes.container}>
                <InstagramApi>
                    <PostContainer />
                </InstagramApi>
            </Container>
        </div>
    );
};
