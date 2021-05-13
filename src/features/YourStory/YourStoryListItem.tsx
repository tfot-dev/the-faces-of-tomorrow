import React from 'react';
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@material-ui/core';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import RestoreIcon from '@material-ui/icons/Restore';
import StarsIcon from '@material-ui/icons/Stars';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
    namedOperations,
    useDeleteAssignedStatusMutation,
    useDeleteStoryMutation,
    useFeatureStoryMutation,
    useGetAllUsersQuery,
    useSetAssignedStatusMutation,
    useUnfeatureStoryMutation,
    Your_Story,
} from '../../generated/graphql';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

type YourStoryListItemType = {
    yourStory: Your_Story;
};

export const YourStoryListItem = ({ yourStory }: YourStoryListItemType) => {
    const { data } = useGetAllUsersQuery();
    const { url } = useRouteMatch();
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useAuth0();

    const [open, setOpen] = React.useState(false);

    const [insert_assigned_status_lookup] = useSetAssignedStatusMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });
    const [delete_assigned_status_lookup] = useDeleteAssignedStatusMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });
    const [insert_featured_story_lookup] = useFeatureStoryMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });
    const [delete_featured_story_lookup] = useUnfeatureStoryMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });
    const [delete_story] = useDeleteStoryMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });

    const { name, email, id, read_status, assigned_to, written_story, featured } = yourStory;

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

    const handleFeatureStoryClick = () => {
        insert_featured_story_lookup({
            variables: {
                id,
            },
        }).then(() => enqueueSnackbar('Story has been featured!', { variant: 'success' }));
    };

    const handleUnfeatureStoryClick = () => {
        delete_featured_story_lookup({
            variables: {
                id,
            },
        }).then(() => enqueueSnackbar('Story has been un-featured!', { variant: 'success' }));
    };

    const handleConfirmDialogOpen = () => {
        setOpen(true);
    };

    const handleConfirmDialogClose = () => {
        setOpen(false);
    };

    const handleDeleteClick = () => {
        delete_story({
            variables: {
                id,
            },
        }).then(() => enqueueSnackbar('Story has been deleted!', { variant: 'success' }));
    };

    const assignedUser = data?.users ? data.users.find((u) => u.auth0_id === assigned_to?.user_id) : null;

    return (
        <ListItem button alignItems="flex-start" key={id} component={Link} to={`${url}/${id}`} selected={!!read_status}>
            {assignedUser !== null && assignedUser?.picture && (
                <ListItemAvatar>
                    <Avatar src={assignedUser.picture} alt={assignedUser.name} />
                </ListItemAvatar>
            )}
            <ListItemText
                primary={`${name}`}
                secondary={
                    <Typography component="span" variant="body2" color="textPrimary">
                        {email}
                    </Typography>
                }
            />
            <ListItemSecondaryAction>
                <Grid container>
                    <Grid item>
                        <IconButton edge="end" aria-label="assign" onClick={handleConfirmDialogOpen}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </Grid>
                    {/* Confirm Dialog for deleting the story*/}
                    <Dialog open={open} onClose={handleConfirmDialogClose}>
                        <DialogTitle>Confirm Delete Story?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this story? FYI: This action is unforgivable and you
                                won't be able to get your story back :D
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleConfirmDialogClose} color="primary" variant="contained">
                                Aah, the guilt!
                            </Button>
                            <Button onClick={handleDeleteClick} color="secondary" variant="contained" autoFocus>
                                Yes, do it.
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {assigned_to === null && (
                        <Grid item>
                            <IconButton edge="end" aria-label="assign" onClick={handleAssignToMeClick}>
                                <EventSeatIcon />
                            </IconButton>
                        </Grid>
                    )}
                    {assigned_to !== null && !written_story?.ready && (
                        <Grid item>
                            <IconButton aria-label="undo-assign" onClick={handleUndoAssignClick}>
                                <RestoreIcon />
                            </IconButton>
                        </Grid>
                    )}
                    {!featured && written_story?.ready && (
                        <Grid item>
                            <IconButton aria-label="feature-story" onClick={handleFeatureStoryClick}>
                                <StarsIcon />
                            </IconButton>
                        </Grid>
                    )}
                    {featured && written_story?.ready && (
                        <Grid item>
                            <IconButton aria-label="unfeature-story" onClick={handleUnfeatureStoryClick}>
                                <HighlightOffIcon />
                            </IconButton>
                        </Grid>
                    )}
                </Grid>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
