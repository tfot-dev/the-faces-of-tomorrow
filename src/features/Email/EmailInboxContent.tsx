import React from 'react';
import { Card, CardContent, LinearProgress } from '@material-ui/core';
import { useGetEmailQuery } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import { Error } from '../Error/Error';

export const EmailInboxContent = () => {
    const { params } = useRouteMatch<{ messageId: string; folderId: string }>();
    const { loading, error, data } = useGetEmailQuery({
        variables: { messageId: params.messageId, folderId: params.folderId },
    });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.getEmail) {
        return null;
    }

    const { content } = data.getEmail;

    return (
        <Card>
            <CardContent dangerouslySetInnerHTML={{ __html: content }} />
        </Card>
    );
};
