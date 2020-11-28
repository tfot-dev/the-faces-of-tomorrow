import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

export const Error = () => {
    return (
        <Card>
            <CardHeader
                title="Sorry! The schema could not be loaded."
                subheader="There was some error while making the graphql request."
            />
        </Card>
    );
};
