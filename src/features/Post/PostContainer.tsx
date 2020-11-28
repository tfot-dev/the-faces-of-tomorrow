import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';

export const PostContainer: React.FC = () => {
    const { loading, error, data } = useGetAllPostsQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.posts) {
        return null;
    }

    return (
        <Grid container spacing={2} alignContent={'center'} direction="column">
            {data.posts.map((post) => post !== null && <Post post={post} key={post.id} />)}
        </Grid>
    );
};
