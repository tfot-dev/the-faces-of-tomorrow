import React from 'react';
import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import ProfileInfo from './ProfileInfo';
import KaranPicture from '../../assets/Karan.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[400],
            height: 300,
            padding: 5,
        },
    }),
);

export const AboutUs = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center" color="textPrimary">
                Who we are?
            </Typography>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <ProfileInfo image={KaranPicture} text="Best web developer of life time" />
                <ProfileInfo image={KaranPicture} text="Best web developer of life time" />
                <ProfileInfo image={KaranPicture} text="Best web developer of life time" />
                <ProfileInfo image={KaranPicture} text="Best web developer of life time" />
                <ProfileInfo image={KaranPicture} text="Best web developer of life time" />
            </Box>
        </Box>
    );
};
