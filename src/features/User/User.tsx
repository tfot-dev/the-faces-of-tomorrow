import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const Users = gql`
    query GetAllUsers {
        users {
            id
            name
        }
    }
`;

export const User = () => {
    const { loading, error, data } = useQuery(Users);
    const { logout } = useAuth0();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <div>
            <Button onClick={() => logout()} color="primary">
                Logout
            </Button>
        </div>
    );
};
