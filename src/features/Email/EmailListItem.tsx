import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Email, SentEmail } from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';

interface EmailListItemProps {
    email: Email | SentEmail;
}

export const EmailListItem = ({ email }: EmailListItemProps) => {
    const { url } = useRouteMatch();

    return (
        <ListItem
            button
            alignItems="flex-start"
            key={email.toAddress}
            component={Link}
            to={`${url}/${email.messageId}`}
        >
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
