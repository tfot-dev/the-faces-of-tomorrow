import React from 'react';
import { AppBar, createStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Authentication } from '../Authentication/Authentication';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    }),
);
export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    The faces of tomorrow
                </Typography>
                <Authentication />
            </Toolbar>
        </AppBar>
    );
};
