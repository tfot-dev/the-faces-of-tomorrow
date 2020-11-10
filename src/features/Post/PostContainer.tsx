import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { IPostProps, Post } from './Post';

const Posts = gql`
    query GetAllPosts {
        posts {
            id
            caption
            mediaUrl
            timestamp
        }
    }
`;

export const PostContainer: React.FC = () => {
    const { loading, error, data } = useQuery(Posts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Grid container spacing={2} alignContent={'center'} direction="column">
            {data.posts.map(({ id, caption, mediaUrl, timestamp }: IPostProps) => (
                <Post id={id} caption={caption} mediaUrl={mediaUrl} timestamp={timestamp} key={id} />
            ))}
        </Grid>
    );
};
