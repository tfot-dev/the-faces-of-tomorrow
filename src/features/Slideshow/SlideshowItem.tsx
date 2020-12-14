import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 800,
        backgroundImage: ({ src }: SlideshowItem) => `url(${src})`,
        backgroundSize: 'cover',
    },
    text: {
        margin: 'auto',
        maxWidth: 1000,
    },
});

export type SlideshowItem = {
    name: string;
    src: string;
};

export const SlideshowItem = (props: SlideshowItem) => {
    const { name } = props;
    const classes = useStyles(props);

    return (
        <Box className={classes.root}>
            <Box className={classes.text}>
                <Typography align="center" variant="h2" color="textPrimary">
                    {name}
                </Typography>
            </Box>
        </Box>
    );
};
