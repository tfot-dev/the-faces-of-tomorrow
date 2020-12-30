import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetPostQuery } from '../../generated/graphql';
import { Card, CardContent, LinearProgress, Typography } from '@material-ui/core';
import { Error } from '../Error/Error';
import Carousel from 'react-material-ui-carousel';
import { PostViewImage } from './PostViewImage';

export const PostView = () => {
    const { params } = useRouteMatch<{ postId: string }>();

    const { loading, error, data } = useGetPostQuery({ variables: { id: params.postId } });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.post) {
        return null;
    }

    const { caption, media } = data.post;

    return (
        <Card>
            <Carousel>
                {media.map(
                    (mediaInfo, index) => mediaInfo !== null && <PostViewImage key={index} src={mediaInfo.media_url} />,
                )}
            </Carousel>
            <CardContent>
                <Typography variant="caption" color="textPrimary">
                    {caption}
                </Typography>
            </CardContent>
        </Card>
    );
};
