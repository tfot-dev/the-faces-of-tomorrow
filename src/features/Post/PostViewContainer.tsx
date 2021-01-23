import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPostQuery } from '../../generated/graphql';
import { Grid, LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { PostView } from './PostView';
import { MoreStoriesContainer } from './MoreStoriesContainer';

export const PostViewContainer = () => {
    const { search } = useLocation();

    const { loading, error, data } = useGetPostQuery({ variables: { id: search.replace('?', '') } });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.post) {
        return null;
    }

    const { caption, media, media_url, id } = data.post;

    if (media === undefined) {
        return <PostView caption={caption} media={[{ media_url, id }]} />;
    }

    return (
        <Grid container spacing={2}>
            <Grid item md={6}>
                <PostView caption={caption} media={media} />
            </Grid>
            <Grid item md={6}>
                <MoreStoriesContainer />
            </Grid>
        </Grid>
    );
};
