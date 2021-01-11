import React from 'react';
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@material-ui/core';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { useAssignedStatusMutation, Your_Story } from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';

type YourStoryListItemType = {
    yourStory: Your_Story;
};

export const YourStoryListItem = ({ yourStory }: YourStoryListItemType) => {
    const { url } = useRouteMatch();
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useAuth0();
    const [insert_assigned_status_lookup] = useAssignedStatusMutation();

    const { name, email, id, projectIdea, read_status, assigned_to } = yourStory;

    const handleAssignToMeClick = () => {
        insert_assigned_status_lookup({
            variables: {
                id,
                user_id: user.sub,
            },
        }).then(() => enqueueSnackbar('Story has been assigned to you!', { variant: 'success' }));
    };

    return (
        <ListItem button alignItems="flex-start" key={id} component={Link} to={`${url}/${id}`} selected={!!read_status}>
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
            <ListItemSecondaryAction>
                {assigned_to === null ? (
                    <IconButton edge="end" aria-label="assign" onClick={handleAssignToMeClick}>
                        <EventSeatIcon />
                    </IconButton>
                ) : (
                    <Avatar alt={user.email} src={user.picture} />
                )}
            </ListItemSecondaryAction>
        </ListItem>
    );
};
