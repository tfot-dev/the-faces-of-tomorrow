import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Your_Story } from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';

type YourStoryListItemType = {
    yourStory: Your_Story;
};

export const YourStoryListItem = ({ yourStory }: YourStoryListItemType) => {
    const { url } = useRouteMatch();

    const { name, email, id, projectIdea } = yourStory;

    return (
        <ListItem button alignItems="flex-start" key={id} component={Link} to={`${url}/${id}`}>
            <ListItemAvatar>
                <Avatar>{email.substr(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {projectIdea}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};
