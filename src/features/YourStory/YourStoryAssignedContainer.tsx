import React from 'react';
import { useGetAllYourStoriesQuery } from '../../generated/graphql';
import { Card, CardContent, LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { YourStoryListView } from './YourStoryListView';
import { YourStoryContent } from './YourStoryContent';

export const YourStoryAssignedContainer: React.FC = () => {
    const { loading, error, data } = useGetAllYourStoriesQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.your_story) {
        return null;
    }

    const assignedStories = data.your_story
        .filter((ys) => ys.assigned_to !== null)
        .filter((ys) => !ys.written_story?.ready);

    return assignedStories.length ? (
        <YourStoryListView yourStories={assignedStories} yourStoryContent={YourStoryContent} />
    ) : (
        <Card>
            <CardContent>Looks like you have no stories in progress!</CardContent>
        </Card>
    );
};
