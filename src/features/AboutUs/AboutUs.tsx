import React from 'react';
import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import ProfileInfo from './ProfileInfo';
import KaranPicture from '../../assets/Karan.jpeg';
import DeepikaPicture from '../../assets/Deepika.jpg';
import JuliaPicture from '../../assets/Julia.jpeg';
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
                <ProfileInfo
                    image={KaranPicture}
                    text="A web developer who's passionate about technology and believes that sharing stories is a step towards creating a difference."
                    name="Karan Hudia"
                />
                <ProfileInfo
                    image={DeepikaPicture}
                    text="Just a girl hailing from Himalayas who's passionate about exploring places, knowing people and listening to stories!"
                    name="Deepika Rawat"
                />
                <ProfileInfo
                    image={JuliaPicture}
                    text="A storyteller who thinks that we all share the love for our planet and want to connect with it again!“"
                    name="Julia Wünsche"
                />
            </Box>
        </Box>
    );
};
