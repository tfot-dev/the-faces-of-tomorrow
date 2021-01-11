import React from 'react';
import { GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { PostSkeleton } from './PostSkeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '750px',
    },
    gridList: {
        cellheight: 50,
        spacing: 4,
        cols: 3,
        justifyContent: 'center',
        height: 2000,
        fontStretch: 'default',
    },
    div: {
        margin: 'auto',
        flexBasis: 30,
        padding: '0 30px',
    },
});

export const MoreStoriesContainer = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllPostsQuery();

    let posts = Array(10).fill({});

    if (error) return <Error />;
    if (data?.posts) {
        posts = [...data.posts];
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                {posts.map((post) => {
                    return loading ? <PostSkeleton /> : post !== null && <Post post={post} key={post.id} />;
                })}
            </GridList>
        </div>
    );
};
