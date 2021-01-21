import React from 'react';
import { GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { makeStyles } from '@material-ui/core/styles';
import { PostSkeleton } from './PostSkeleton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
    },
});

export const PostContainer = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllPostsQuery();

    let posts = Array(10).fill({});

    if (error) return <Error />;
    if (data?.posts) {
        posts = [...data.posts];
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} spacing={6}>
                {posts.map((post, index) => {
                    return loading ? <PostSkeleton key={index} /> : post !== null && <Post post={post} key={post.id} />;
                })}
            </GridList>
        </div>
    );
};
