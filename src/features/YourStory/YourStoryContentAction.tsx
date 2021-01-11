import React from 'react';
import { namedOperations, useUpdateStoryStatusMutation, Your_Story } from '../../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { isStoryReady, isUnassigned } from '../../utils/yourStory';
import { useSnackbar } from 'notistack';

type YourStoryContentActionType = {
    yourStory: Your_Story;
};

export const YourStoryContentAction = ({ yourStory }: YourStoryContentActionType) => {
    const { enqueueSnackbar } = useSnackbar();
    const { id } = yourStory;

    const [insert_written_story] = useUpdateStoryStatusMutation({
        refetchQueries: [namedOperations.Query.GetAllYourStories],
    });

    const handleUpdateReadyStatus = (status: boolean) => {
        insert_written_story({ variables: { id, ready: status } }).then(() =>
            enqueueSnackbar('Story status has been updated!', { variant: 'success' }),
        );
    };

    if (isUnassigned(yourStory)) {
        return null;
    }

    return (
        <Grid item>
            {isStoryReady(yourStory) ? (
                <Button color="secondary" variant="contained" onClick={() => handleUpdateReadyStatus(false)}>
                    Move back to In-Progress
                </Button>
            ) : (
                <Button color="secondary" variant="contained" onClick={() => handleUpdateReadyStatus(true)}>
                    Move to Finished
                </Button>
            )}
        </Grid>
    );
};
