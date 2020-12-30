import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        postImage: {
            backgroundImage: ({ src }: PostViewImageType) => `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            height: 500,
        },
    }),
);

type PostViewImageType = {
    src: string;
};

export const PostViewImage = (props: PostViewImageType) => {
    const classes = useStyles(props);

    return <div className={classes.postImage}></div>;
};
