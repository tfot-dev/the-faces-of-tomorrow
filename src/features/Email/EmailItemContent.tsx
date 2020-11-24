import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { useGetEmailQuery } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';

export const EmailItemContent = () => {
    const { params } = useRouteMatch<{ messageId: string }>();
    const { loading, error, data } = useGetEmailQuery({ variables: { messageId: params.messageId } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data?.getEmail) {
        return null;
    }

    console.log(data);

    return (
        <Card>
            <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title={data.getEmail.sender}
                subheader={data.getEmail.subject}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.getEmail.summary}
                </Typography>
            </CardContent>
        </Card>
    );
};
