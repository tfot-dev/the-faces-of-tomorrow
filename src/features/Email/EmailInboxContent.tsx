import React from 'react';
import { Avatar, Card, CardContent, CardHeader, LinearProgress, Typography } from '@material-ui/core';
import { useGetEmailQuery } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import { Error } from '../Error/Error';

export const EmailInboxContent = () => {
    const { params } = useRouteMatch<{ messageId: string }>();
    const { loading, error, data } = useGetEmailQuery({ variables: { messageId: params.messageId } });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.getEmail) {
        return null;
    }

    const { sender, summary, subject } = data.getEmail;

    return (
        <Card>
            <CardHeader avatar={<Avatar>{sender.substr(0, 1)}</Avatar>} title={sender} subheader={subject} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {summary}
                </Typography>
            </CardContent>
        </Card>
    );
};
