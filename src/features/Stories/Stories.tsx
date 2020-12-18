import React from 'react';
import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import { PostContainer } from '../Post/PostContainer';
import { PublicApi } from '../Api/PublicApi';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[50],
            padding: '20px 0',
        },
    }),
);

export const Stories = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center" color="secondary">
                <Box fontWeight="fontWeightBold">Latest Stories</Box>
            </Typography>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <PublicApi>
                    <PostContainer />
                </PublicApi>
            </Box>
        </Box>
    );
};
