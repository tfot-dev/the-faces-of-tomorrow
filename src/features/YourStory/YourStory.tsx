import React from 'react';
import { YourStoryForm } from './YourStoryForm';
import { useSendYourStoryMutation } from '../../generated/graphql';

export const YourStory = () => {
    const [insert_your_story] = useSendYourStoryMutation();

    return <YourStoryForm onSubmit={(data) => insert_your_story({ variables: data })} />;
};
