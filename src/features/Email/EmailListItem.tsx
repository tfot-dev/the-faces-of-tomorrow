import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Email, SentEmail } from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';

interface EmailListItemProps {
    email: Email | SentEmail;
}

export const EmailListItem = ({ email }: EmailListItemProps) => {
    const { url } = useRouteMatch();

    const { toAddress, messageId, subject, sender } = email;

    return (
        <ListItem button alignItems="flex-start" key={toAddress} component={Link} to={`${url}/${messageId}`}>
            <ListItemAvatar>
                <Avatar>{sender.substr(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={subject}
                secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {sender}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};
