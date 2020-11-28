import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress } from '@material-ui/core';
import { useGetAllUsersQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';

export const User: React.FC = () => {
    const { loading, error, data } = useGetAllUsersQuery();
    const { logout } = useAuth0();

    if (loading) return <CircularProgress color="secondary" />;
    if (error) return <Error />;

    console.log(data);

    return (
        <div>
            <Button onClick={() => logout()} color="inherit">
                Logout
            </Button>
        </div>
    );
};
