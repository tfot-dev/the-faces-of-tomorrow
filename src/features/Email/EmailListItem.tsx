import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
// import { useRouteMatch } from 'react-router-dom';
import { Email } from '../../generated/graphql';

interface EmailListItemProps {
    email: Email;
}

export const EmailListItem = ({ email }: EmailListItemProps) => {
    // const match = useRouteMatch();
    const handleEmailClick = () => {
        console.log('email clicked');
    };

    return (
        <ListItem button alignItems="flex-start" key={email.toAddress} onClick={handleEmailClick}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={email.subject}
                secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {email.sender}
                        </Typography>
                        {` — ${email.summary}`}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};
