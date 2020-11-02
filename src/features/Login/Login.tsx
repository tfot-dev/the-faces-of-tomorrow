import React from 'react';
import {Button} from "@material-ui/core";
import {useAuth0} from "@auth0/auth0-react";

export const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <Button onClick={() => loginWithRedirect()} color="primary">Login</Button>
        </div>
    );
};
