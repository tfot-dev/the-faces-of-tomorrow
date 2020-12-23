import React from 'react';
import { Avatar, Box, createStyles, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type ProfileInfo = {
    image: string;
    text: string;
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

const ProfileInfo = ({ image, text }: ProfileInfo) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Avatar src={image} className={classes.picture} />
            <Typography variant="caption" color="textPrimary" align="center">
                {`"${text}"`}
            </Typography>
        </Box>
    );
};

export default ProfileInfo;
