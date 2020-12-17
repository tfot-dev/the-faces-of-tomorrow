import React from 'react';
import { createStyles, GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { PostSkeleton } from './PostSkeleton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        gridList: {
            flexWrap: 'nowrap',
            padding: 20,
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
    }),
);

export const PostContainer: React.FC = () => {
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
                {posts.map((post) => {
                    return loading ? <PostSkeleton /> : post !== null && <Post post={post} key={post.id} />;
                })}
            </GridList>
        </div>
    );
};
