import React from 'react';
import { AppBar, Avatar, createStyles, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo/logo.png';
import { ThemeButton } from '../ThemeButton';
import { Authentication } from '../Authentication/Authentication';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
        spacer: {
            flexGrow: 1,
        },
    }),
);

type AbsoluteHeaderType = {
    onThemeToggle: (darkMode: boolean) => void;
};

export const AbsoluteHeader = ({ onThemeToggle }: AbsoluteHeaderType) => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <Avatar src={Logo} component={Link} to="/" />
                    <div className={classes.spacer} />
                    <ThemeButton onThemeToggle={onThemeToggle} />
                    {process.env.REACT_APP_BUILD_TYPE === 'admin' && <Authentication />}
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
