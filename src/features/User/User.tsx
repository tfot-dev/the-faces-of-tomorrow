import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { useGetAllUsersQuery } from '../../generated/graphql';

export const User: React.FC = () => {
    const { loading, error, data } = useGetAllUsersQuery();
    const { logout } = useAuth0();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <div>
            <Button onClick={() => logout()} color="inherit">
                Logout
            </Button>
        </div>
    );
};
