import React from 'react';
import { useGetAllEmailsQuery } from '../../generated/graphql';
import { LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { EmailListView } from './EmailListView';
import { EmailInboxContent } from './EmailInboxContent';

export const EmailInboxContainer = () => {
    const { loading, error, data } = useGetAllEmailsQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.emails) {
        return null;
    }

    return <EmailListView emails={data.emails} emailContent={EmailInboxContent} />;
};
