import React from 'react';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import RestoreIcon from '@material-ui/icons/Restore';
import {
    namedOperations,
    useDeleteAssignedStatusMutation,
    useSetAssignedStatusMutation,
    Your_Story,
} from '../../generated/graphql';
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
    const [insert_assigned_status_lookup] = useSetAssignedStatusMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });
    const [delete_assigned_status_lookup] = useDeleteAssignedStatusMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });

    const { name, id, projectIdea, read_status, assigned_to } = yourStory;

    const handleAssignToMeClick = () => {
        insert_assigned_status_lookup({
            variables: {
                id,
                user_id: user.sub,
            },
        }).then(() => enqueueSnackbar('Story has been assigned to you!', { variant: 'success' }));
    };

    const handleUndoAssignClick = () => {
        delete_assigned_status_lookup({
            variables: {
                id,
            },
        }).then(() => enqueueSnackbar('Story has been unassigned!', { variant: 'success' }));
    };

    return (
        <ListItem button alignItems="flex-start" key={id} component={Link} to={`${url}/${id}`} selected={!!read_status}>
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
                    <IconButton aria-label="undo-assign" onClick={handleUndoAssignClick}>
                        <RestoreIcon />
                    </IconButton>
                )}
            </ListItemSecondaryAction>
        </ListItem>
    );
};
