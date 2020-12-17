import React from 'react';
import { AppBar, Avatar, createStyles, PaletteType, Theme, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';
import { ThemeButton } from '../ThemeButton';
import { Authentication } from '../Authentication/Authentication';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            paddingLeft: '10px',
        },
    }),
);

type OverlappingHeader = {
    onThemeToggle: (darkMode: boolean) => void;
};

export const OverlappingHeader = ({ onThemeToggle }: OverlappingHeader) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" color="transparent" elevation={0}>
            <Toolbar>
                <Avatar src={Logo} />
                <Typography align="center" variant="h3" className={classes.title} color="textPrimary">
                    THE FACES OF TOMORROW
                </Typography>
                <ThemeButton onThemeToggle={onThemeToggle} />
                <Authentication />
            </Toolbar>
        </AppBar>
    );
};
