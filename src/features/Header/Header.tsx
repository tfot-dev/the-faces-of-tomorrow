import React from 'react';
import { AppBar, Avatar, createStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Authentication } from '../Authentication/Authentication';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        offset: theme.mixins.toolbar,
        title: {
            flexGrow: 1,
            paddingLeft: '10px',
        },
    }),
);
export const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Avatar src={Logo} />
                    <Typography variant="h6" className={classes.title}>
                        The Faces of Tomorrow
                    </Typography>
                    <Authentication />
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </React.Fragment>
    );
};
