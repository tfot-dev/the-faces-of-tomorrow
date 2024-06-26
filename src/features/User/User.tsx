import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, CircularProgress, IconButton, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { useGetAllUsersQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

export const User: React.FC = () => {
    const { loading, error, data } = useGetAllUsersQuery();
    const { logout, user } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (loading) return <CircularProgress color="secondary" />;
    if (error) return <Error />;

    console.log({ data, user });

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt={user.email} src={user.picture} />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                {user.email.includes('@thefacesoftomorrow.com') && (
                    <MenuItem onClick={handleClose} component={Link} to={Routes.Admin}>
                        Admin
                    </MenuItem>
                )}
                <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
