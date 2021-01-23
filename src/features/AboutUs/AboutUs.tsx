import React from 'react';
import { Box, createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { ProfileInfo } from './ProfileInfo';
import KaranPicture from '../../assets/us/Karan.jpg';
import DeepikaPicture from '../../assets/us/Deepika.jpg';
import JuliaPicture from '../../assets/us/Julia.jpg';
import GiorgiaPicture from '../../assets/us/Giorgia.jpeg';
import DianaPicture from '../../assets/us/Diana.jpg';
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
                <Grid container justify="space-evenly" spacing={2}>
                    <ProfileInfo
                        image={DeepikaPicture}
                        text="Just a girl who's passionate about exploring places, knowing people and listening to stories!"
                        name="Deepika Rawat"
                        country="Germany"
                    />
                    <ProfileInfo
                        image={JuliaPicture}
                        text="A storyteller who thinks that we all share the love for our planet and want to connect with it again!"
                        name="Julia Wünsche"
                        country="Sweden"
                    />
                    <ProfileInfo
                        image={KaranPicture}
                        text="A web developer curious about technology and who believes in making a difference in the society."
                        name="Karan Hudia"
                        country="Germany"
                    />
                    <ProfileInfo
                        image={GiorgiaPicture}
                        text="Politics graduate eager to catalyse climate action and learn about sustainable practices by connecting with people from all over the world."
                        name="Giorgia Marchesan"
                        country="Italy"
                    />
                    <ProfileInfo
                        image={DianaPicture}
                        text="A girl fascinated by our universe who believes that there is good in everything, we just need to find it and inspire each other."
                        name="Diana Spurzem"
                        country="Denmark"
                    />
                </Grid>
            </Box>
        </Box>
    );
};
