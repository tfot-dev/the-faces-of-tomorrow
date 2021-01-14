import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 1000,
        backgroundImage: ({ src }: SlideshowItem) => `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        color: common.white,
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
                    <Typography align="center" variant="h1" color="inherit">
                        The Faces of Tomorrow
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h5" color="inherit">
                        {name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="secondary" component={Link} to={Routes.YourStory}>
                            Post Your Own Story!
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
