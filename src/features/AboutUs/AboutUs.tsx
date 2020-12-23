import React from 'react';
import { Box, createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { ProfileInfo } from './ProfileInfo';
import KaranPicture from '../../assets/Karan.jpeg';
import DeepikaPicture from '../../assets/Deepika.jpg';
import JuliaPicture from '../../assets/Julia.jpeg';
import GiorgiaPicture from '../../assets/Giorgia.jpeg';
import DianaPicture from '../../assets/Diana.jpeg';
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
                        text="Please provide me a text? o.O"
                        name="Giorgia Marchesan"
                        country="Italy"
                    />
                    <ProfileInfo
                        image={DianaPicture}
                        text="Please provide me a text? o.O"
                        name="Diana Spurzum"
                        country="Denmark"
                    />
                </Grid>
            </Box>
        </Box>
    );
};
