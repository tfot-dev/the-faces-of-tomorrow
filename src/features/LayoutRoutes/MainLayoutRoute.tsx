import React from 'react';
import { FixedHeader } from '../Header/FixedHeader';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { LayoutRoute } from './LayoutRoute';

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
});

export const MainLayoutRoute = ({ onThemeToggle, ...rest }: LayoutRoute) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <FixedHeader onThemeToggle={onThemeToggle} />
            <Container className={classes.container}>
                <Route {...rest} />
            </Container>
        </>
    );
};
