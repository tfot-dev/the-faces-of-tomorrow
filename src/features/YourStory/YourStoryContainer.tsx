import React from 'react';
import { useGetAllYourStoriesQuery } from '../../generated/graphql';
import { LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { YourStoryListView } from './YourStoryListView';
import { YourStoryContent } from './YourStoryContent';

export const YourStoryContainer: React.FC = () => {
    const { loading, error, data } = useGetAllYourStoriesQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.your_story) {
        return null;
    }

    return <YourStoryListView yourStories={data.your_story} yourStoryContent={YourStoryContent} />;
};
