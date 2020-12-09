import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { useGetAllUsersQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';

export const User: React.FC = () => {
    const { loading, error, data } = useGetAllUsersQuery();
    const { logout } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (loading) return <CircularProgress color="secondary" />;
    if (error) return <Error />;

    console.log(data);

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
