import React from 'react';
import { EmailListView } from './EmailListView';
import { useGetSentEmailsQuery } from '../../generated/graphql';
import { EmailInboxContent } from './EmailInboxContent';
import { LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';

export const EmailSentContainer: React.FC = () => {
    const { loading, error, data } = useGetSentEmailsQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.sentEmails) {
        return null;
    }

    return <EmailListView emails={data.sentEmails} emailContent={EmailInboxContent} />;
};
