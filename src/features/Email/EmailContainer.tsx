import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Emails = gql`
    query GetAllEmails {
        emails {
            summary
        }
    }
`;

export const EmailContainer: React.FC = () => {
    const { loading, error, data } = useQuery(Emails);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return <div />;
};
