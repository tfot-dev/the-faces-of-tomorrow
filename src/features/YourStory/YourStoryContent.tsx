import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Grid, LinearProgress } from '@material-ui/core';
import { namedOperations, useGetYourStoryQuery, useReadStatusMutation } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import { Error } from '../Error/Error';
import { useAuth0 } from '@auth0/auth0-react';
import { YourStoryContentEditor } from './YourStoryContentEditor';
import { YourStoryContentDetails } from './YourStoryContentDetails';
import { YourStoryContentImages } from './YourStoryContentImages';
import { YourStoryContentAction } from './YourStoryContentAction';

export const YourStoryContent = () => {
    const { params } = useRouteMatch<{ yourStoryId: string }>();
    const { user } = useAuth0();
    const { loading, error, data } = useGetYourStoryQuery({ variables: { id: params.yourStoryId } });
    const [setReadStatus] = useReadStatusMutation({ refetchQueries: [namedOperations.Query.GetAllYourStories] });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.your_story_by_pk) {
        return null;
    }

    const { name, email, read_status, id } = data.your_story_by_pk;

    if (!read_status) {
        setReadStatus({
            variables: {
                id,
                user_id: user.sub,
            },
        });
    }

    return (
        <Card>
            <CardHeader avatar={<Avatar>{name.substr(0, 1)}</Avatar>} title={`${name}`} subheader={email} />
            <CardContent>
                <Grid container spacing={2}>
                    <YourStoryContentDetails yourStory={data.your_story_by_pk} />
                    <YourStoryContentImages yourStory={data.your_story_by_pk} />
                    <YourStoryContentEditor yourStory={data.your_story_by_pk} />
                    <YourStoryContentAction yourStory={data.your_story_by_pk} />
                </Grid>
            </CardContent>
        </Card>
    );
};
