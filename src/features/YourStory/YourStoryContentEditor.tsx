import React from 'react';
import Editor from 'ckeditor5-build-classic-email/build/ckeditor';
import { CKEditorConfiguration } from '../../constants/CKEditorConfiguration';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useUpdateWrittenStoryMutation, Your_Story } from '../../generated/graphql';
import { Grid, Typography } from '@material-ui/core';
import { isStoryReady, isUnassigned } from '../../utils/yourStory';
import { useSnackbar } from 'notistack';

type YourStoryContentEditorType = {
    yourStory: Your_Story;
};

export const YourStoryContentEditor = ({ yourStory }: YourStoryContentEditorType) => {
    const { enqueueSnackbar } = useSnackbar();
    const [insert_written_story] = useUpdateWrittenStoryMutation();

    const { id, written_story } = yourStory;

    const handleSaveWrittenStory = (story: string) => {
        return insert_written_story({ variables: { id, writtenStory: story } }).then(() =>
            enqueueSnackbar('Story Updated!', { variant: 'success', persist: false }),
        );
    };

    if (isUnassigned(yourStory)) {
        return null;
    }

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">
                    Story
                </Typography>
            </Grid>

            <Grid item xs={12}>
                {isStoryReady(yourStory) && written_story?.story ? (
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: written_story?.story }}
                    />
                ) : (
                    <CKEditor
                        editor={Editor}
                        config={CKEditorConfiguration(handleSaveWrittenStory)}
                        data={written_story?.story}
                    />
                )}
            </Grid>
        </>
    );
};
