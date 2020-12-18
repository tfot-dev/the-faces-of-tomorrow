import React from 'react';
import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import ProfileInfo from './ProfileInfo';
import KaranPicture from '../../assets/Karan.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[100],
            padding: '20px 0',
        },
    }),
);

export const AboutUs = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center" color="secondary">
                <Box fontWeight="fontWeightBold">The Team</Box>
            </Typography>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <ProfileInfo image={KaranPicture} text="Trying my best!" />
            </Box>
        </Box>
    );
};
