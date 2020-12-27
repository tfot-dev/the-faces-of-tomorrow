import React from 'react';
import { Card, CardContent, createStyles, GridListTile, makeStyles, Theme, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 150,
        },
        tileRoot: {
            padding: '8px 0',
            '&:first-child': {
                paddingLeft: theme.spacing(0.5),
            },
            '&:last-child': {
                paddingRight: theme.spacing(0.5),
            },
            '&:not(:first-child)': {
                paddingLeft: theme.spacing(1),
            },
            '&:not(:last-child)': {
                paddingRight: theme.spacing(1),
            },
        },
        tile: { padding: '4px 0' },
    }),
);

export const PostSkeleton = () => {
    const classes = useStyles();

    return (
        <GridListTile className={classes.tileRoot} classes={{ tile: classes.tile }}>
            <Card className={classes.root}>
                <Skeleton animation="wave" variant="rect" height={150} />
                <CardContent>
                    <Typography variant="caption">
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
