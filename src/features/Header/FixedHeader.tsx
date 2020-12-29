import React from 'react';
import { AppBar, Avatar, createStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Authentication } from '../Authentication/Authentication';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';
import { ThemeButton } from '../ThemeButton';
import { Link } from 'react-router-dom';

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

type FixedHeaderType = {
    onThemeToggle: (darkMode: boolean) => void;
};

export const FixedHeader = ({ onThemeToggle }: FixedHeaderType) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Avatar src={Logo} component={Link} to="/" />
                    <Typography variant="h6" className={classes.title}>
                        The Faces of Tomorrow
                    </Typography>
                    <ThemeButton onThemeToggle={onThemeToggle} />
                    {process.env.REACT_APP_BUILD_TYPE === 'admin' && <Authentication />}
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </React.Fragment>
    );
};
