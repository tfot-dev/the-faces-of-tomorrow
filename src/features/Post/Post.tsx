import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardMedia, GridListTile, makeStyles, Typography } from '@material-ui/core';
import { Post as PostType } from '../../generated/graphql';
import clamp from 'clamp-js';

export interface IPostProps {
    post: PostType;
}

const useStyles = makeStyles({
    root: {
        width: 150,
    },
    tile: {
        padding: 10,
    },
});

export const Post = ({ post }: IPostProps) => {
    const classes = useStyles();

    const { mediaUrl, caption } = post;
    const captionElement = useRef<HTMLElement>(null);

    useEffect(() => {
        if (captionElement.current) {
            clamp(captionElement.current, { clamp: 4 });
        }
    }, []);

    return (
        <GridListTile classes={{ tile: classes.tile }}>
            <Card className={classes.root}>
                <CardMedia component="img" height={150} image={mediaUrl} />
                <CardContent>
                    <Typography variant="caption" color="textPrimary" ref={captionElement}>
                        {caption}
                    </Typography>
                </CardContent>
            </Card>
        </GridListTile>
    );
};
