import React from 'react';
import { GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { PostSkeleton } from './PostSkeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridList: {
        justifyContent: 'center',
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
        <GridList className={classes.gridList}>
            {posts.map((post, index) => {
                return loading ? <PostSkeleton key={index} /> : post !== null && <Post post={post} key={post.id} />;
            })}
        </GridList>
    );
};
