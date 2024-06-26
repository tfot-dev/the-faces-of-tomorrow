import React from 'react';
import { YourStoryForm } from './YourStoryForm';
import { useSendYourStoryMutation, Your_Story } from '../../generated/graphql';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

export const YourStory = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [insert_your_story] = useSendYourStoryMutation();
    const history = useHistory();

    const handleOnSubmit = (data: Your_Story) => {
        insert_your_story({ variables: data }).then(() => {
            enqueueSnackbar('Story posted Successfully!', { variant: 'success' });
            history.push(Routes.YourStoryPosted);
        });
    };

    return <YourStoryForm onSubmit={handleOnSubmit} />;
};
