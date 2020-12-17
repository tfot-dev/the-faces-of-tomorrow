import React from 'react';
import { AppBar, Avatar, createStyles, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';
import { ThemeButton } from '../ThemeButton';
import { Authentication } from '../Authentication/Authentication';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    }),
);

type OverlappingHeaderType = {
    onThemeToggle: (darkMode: boolean) => void;
};

export const OverlappingHeader = ({ onThemeToggle }: OverlappingHeaderType) => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <Avatar src={Logo} />
                    <Typography align="center" variant="h3" className={classes.title} color="textPrimary">
                        THE FACES OF TOMORROW
                    </Typography>
                    <ThemeButton onThemeToggle={onThemeToggle} />
                    <Authentication />
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
