import React, { useEffect, useRef } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    createStyles,
    GridListTile,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import { Post as PostType } from '../../generated/graphql';
import clamp from 'clamp-js';

export interface IPostProps {
    post: PostType;
}

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
        <GridListTile className={classes.tileRoot} classes={{ tile: classes.tile }}>
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
