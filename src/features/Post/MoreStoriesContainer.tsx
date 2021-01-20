import React from 'react';
import { GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { PostSkeleton } from './PostSkeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    gridList: {
        justifyContent: 'center',
        fontStretch: 'default',
        width: 550,
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
            <GridList className={classes.gridList} cols={3} spacing={4} cellHeight={50}>
                {posts.map((post) => {
                    return loading ? <PostSkeleton /> : post !== null && <Post post={post} key={post.id} />;
                })}
            </GridList>
        </div>
    );
};
