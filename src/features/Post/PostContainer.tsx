import React from 'react';
import { Grid } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';

export const PostContainer: React.FC = () => {
    const { loading, error, data } = useGetAllPostsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data?.posts) {
        return null;
    }

    return (
        <Grid container spacing={2} alignContent={'center'} direction="column">
            {data.posts.map((post) => post !== null && <Post post={post} key={post.id} />)}
        </Grid>
    );
};
