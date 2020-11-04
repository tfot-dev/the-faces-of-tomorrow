import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../Login/Login';
import { Api } from '../Api/Api';

export const Authentication: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <Api /> : <Login />;
};
