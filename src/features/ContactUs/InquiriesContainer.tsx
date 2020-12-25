import React from 'react';
import { useGetAllInquiriesQuery } from '../../generated/graphql';
import { LinearProgress } from '@material-ui/core';
import { Error } from '../Error/Error';
import { InquiriesListView } from './InquiriesListView';

export const InquiriesContainer = () => {
    const { loading, error, data } = useGetAllInquiriesQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.getInquiries) {
        return null;
    }

    console.log(data?.getInquiries);

    return <InquiriesListView inquiries={data.getInquiries} />;
};
