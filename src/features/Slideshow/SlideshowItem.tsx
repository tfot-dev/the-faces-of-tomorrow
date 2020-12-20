import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 1000,
        backgroundImage: ({ src }: SlideshowItem) => `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
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
            <Grid container spacing={4} justify="center" direction="column">
                <Grid item>
                    <Typography align="center" variant="h1" color="textPrimary">
                        The Faces of Tomorrow
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h5" color="textPrimary">
                        {name}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
