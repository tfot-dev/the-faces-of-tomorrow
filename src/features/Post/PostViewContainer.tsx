import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetPostQuery } from '../../generated/graphql';
import { LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { PostView } from './PostView';

export const PostViewContainer = () => {
    const { params } = useRouteMatch<{ postId: string }>();

    const { loading, error, data } = useGetPostQuery({ variables: { id: params.postId } });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.post) {
        return null;
    }

    const { caption, media, media_url } = data.post;

    if (media === undefined) {
        return <PostView caption={caption} media={[{ media_url }]} />;
    }

    return <PostView caption={caption} media={media} />;
};
