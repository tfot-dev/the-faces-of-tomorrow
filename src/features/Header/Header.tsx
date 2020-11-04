import React from 'react';
import { AppBar, createStyles, Toolbar, Typography } from '@material-ui/core';
import { Authentication } from '../Authentication/Authentication';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    }),
);
export const Header: React.FC = () => {
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
