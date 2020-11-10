import React from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';

export interface IPostProps {
    id: string;
    caption: string;
    mediaUrl: string;
    timestamp: string;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
    },
});

export const Post = ({ caption, mediaUrl }: IPostProps) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Card className={classes.root}>
                <CardMedia component="img" height="600" image={mediaUrl} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {caption}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
