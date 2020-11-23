import React from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Post as PostType } from '../../generated/graphql';

export interface IPostProps {
    post: PostType;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
    },
});

export const Post = ({ post }: IPostProps) => {
    const classes = useStyles();

    const { mediaUrl, caption } = post;

    return (
        <Grid item xs={12}>
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
