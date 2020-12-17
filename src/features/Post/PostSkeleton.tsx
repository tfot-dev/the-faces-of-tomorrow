import React from 'react';
import { Card, CardContent, GridListTile, makeStyles, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    root: {
        width: 150,
    },
    tile: {
        padding: 10,
    },
});

export const PostSkeleton = () => {
    const classes = useStyles();

    return (
        <GridListTile classes={{ tile: classes.tile }}>
            <Card className={classes.root}>
                <Skeleton animation="wave" variant="rect" height={150} />
                <CardContent>
                    <Typography variant="caption" color="textSecondary">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" width="80%" />
                    </Typography>
                </CardContent>
            </Card>
        </GridListTile>
    );
};
