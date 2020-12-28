import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Inquiries } from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';

interface InquiriesListItemProps {
    inquiries: Inquiries;
}

export const InquiriesListItem = ({ inquiries }: InquiriesListItemProps) => {
    const { url } = useRouteMatch();

    const { email, id, name, query } = inquiries;

    return (
        <ListItem button alignItems="flex-start" key={id} component={Link} to={`${url}/${id}`}>
            <ListItemAvatar>
                <Avatar>{name.substr(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={email}
                secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {query}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};
