import React from 'react';
import { Avatar, Card, CardContent, CardHeader, LinearProgress, Typography } from '@material-ui/core';
import { useGetInquiryQuery } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import { Error } from '../Error/Error';

export const InquiryContent = () => {
    const { params } = useRouteMatch<{ inquiryId: string }>();
    const { loading, error, data } = useGetInquiryQuery({ variables: { id: params.inquiryId } });

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.inquiries_by_pk) {
        return null;
    }

    const { name, email, query } = data.inquiries_by_pk;

    return (
        <Card>
            <CardHeader avatar={<Avatar>{name.substr(0, 1)}</Avatar>} title={name} subheader={email} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {query}
                </Typography>
            </CardContent>
        </Card>
    );
};
