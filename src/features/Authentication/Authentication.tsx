import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../Login/Login';
import { User } from '../User/User';
import { UserApi } from '../Api/UserApi';

export const Authentication: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <UserApi>
            <User />
        </UserApi>
    ) : (
        <Login />
    );
};
