import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../Login/Login';
import { User } from '../User/User';
import { AuthenticatedApi } from '../Api/AuthenticatedApi';

export const Authentication: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <AuthenticatedApi>
            <User />
        </AuthenticatedApi>
    ) : (
        <Login />
    );
};
