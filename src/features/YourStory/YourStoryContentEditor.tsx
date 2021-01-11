import React from 'react';
import Editor from 'ckeditor5-build-classic-email/build/ckeditor';
import { CKEditorConfiguration } from '../../constants/CKEditorConfiguration';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useUpdateWrittenStoryMutation, Your_Story } from '../../generated/graphql';

type YourStoryContentEditorType = {
    yourStory: Your_Story;
};

export const YourStoryContentEditor = ({ yourStory }: YourStoryContentEditorType) => {
    const [insert_written_story] = useUpdateWrittenStoryMutation();

    const { id, written_story } = yourStory;

    const handleSaveWrittenStory = (story: string) => {
        return insert_written_story({ variables: { id, writtenStory: story } });
    };

    return (
        <CKEditor editor={Editor} config={CKEditorConfiguration(handleSaveWrittenStory)} data={written_story?.story} />
    );
};
