import React from 'react';
import { Avatar, Box, createStyles, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type ProfileInfo = {
    image: string;
    text: string;
    name: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: theme.spacing(20),
        },
        picture: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            margin: 10,
        },
    }),
);

const ProfileInfo = ({ image, text, name }: ProfileInfo) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Avatar src={image} className={classes.picture} />
            <Box fontWeight="fontWeightBold">
                <Typography variant="body2" color="textPrimary">
                    {name}
                </Typography>
            </Box>
            <Typography variant="caption" color="textPrimary" align="center">
                {`"${text}"`}
            </Typography>
        </Box>
    );
};

export default ProfileInfo;
