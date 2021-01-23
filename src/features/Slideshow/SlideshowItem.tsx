import React from 'react';
import { Box, Button, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: 1000,
        backgroundImage: ({ src }: SlideshowItem) => `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        color: common.white,
    },
    text: {
        padding: `0 ${theme.spacing(1)}px`,
    },
}));

export type SlideshowItem = {
    name: string;
    src: string;
};

export const SlideshowItem = (props: SlideshowItem) => {
    const { name } = props;
    const classes = useStyles(props);

    const { t } = useTranslation();

    return (
        <Box className={classes.root}>
            <Grid container spacing={4} justify="center" direction="column">
                <Grid item>
                    <Typography className={classes.text} align="center" variant="h1" color="inherit">
                        The Faces of Tomorrow
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.text} align="center" variant="h5" color="inherit">
                        {name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="secondary" component={Link} to={Routes.YourStory}>
                            {t('buttons.postYourOwnStory')}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
