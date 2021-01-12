import React from 'react';
import { useGetAllYourStoriesQuery } from '../../generated/graphql';
import { Card, CardContent, LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { YourStoryListView } from './YourStoryListView';
import { YourStoryContent } from './YourStoryContent';

export const YourStoryFeaturedContainer = () => {
    const { loading, error, data } = useGetAllYourStoriesQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.your_story) {
        return null;
    }

    const featuredStories = data.your_story.filter((ys) => ys.featured);

    return featuredStories.length ? (
        <YourStoryListView yourStories={featuredStories} yourStoryContent={YourStoryContent} />
    ) : (
        <Card>
            <CardContent>Looks like you have no stories featured!</CardContent>
        </Card>
    );
};
