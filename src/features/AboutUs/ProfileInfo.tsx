import React from 'react';
import { Avatar, Box, createStyles, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';

type ProfileInfo = {
    image: string;
    text: string;
    name: string;
    country: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: theme.spacing(23),
        },
        picture: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            margin: 10,
        },
        desc: {
            paddingTop: theme.spacing(0.5),
        },
    }),
);

export const ProfileInfo = ({ image, text, name, country }: ProfileInfo) => {
    const classes = useStyles();

    return (
        <Grid item container className={classes.root} direction="column" alignItems="center">
            <Avatar src={image} className={classes.picture} />
            <Box fontWeight="fontWeightBold">
                <Typography variant="body2" color="textPrimary">
                    {name}
                </Typography>
            </Box>
            <Grid container item justify="center">
                <Grid item>
                    <LocationOnIcon color="action" fontSize="small" />
                </Grid>
                <Grid item>
                    <Typography variant="caption" color="textPrimary" align="center">
                        {country}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="caption" color="textSecondary" align="center" className={classes.desc}>
                <i>{`"${text}"`}</i>
            </Typography>
        </Grid>
    );
};
