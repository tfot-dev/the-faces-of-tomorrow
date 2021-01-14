import React from 'react';
import { DropzoneDialogBase, FileObject } from 'material-ui-dropzone';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { Cloudinary } from '../../constants/Cloudinary';

type UploadImagesDialogType = {
    onChange: (publicIds: string[]) => void;
};

export const UploadImagesDialog = ({ onChange }: UploadImagesDialogType) => {
    const [open, setOpen] = React.useState<boolean>();
    const [uploading, setUploading] = React.useState<boolean>(false);
    const [files, setFiles] = React.useState<FileObject[]>([]);
    const [uploadedFileNames, setUploadedFileNames] = React.useState<string[]>([]);

    const handleOnSave = () => {
        setUploading(true);
        setOpen(false);

        // Actual Uploading Task
        const fileUploads = files.map((fileObj) => {
            const formData = new FormData();

            formData.append('file', fileObj.file);
            formData.append('upload_preset', Cloudinary.UploadPreset);

            return axios
                .post(Cloudinary.UploadUrl, formData, {
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                })
                .then((response) => {
                    const data = response.data;
                    console.log(data);

                    return data;
                });
        });

        // Once all the files are uploaded
        axios.all(fileUploads).then((uploads) => {
            setUploading(false);

            const fileNames = uploads.map((upload) => `${upload.original_filename}.${upload.format}`);
            const pIds = uploads.map((upload) => upload.public_id);

            setUploadedFileNames(fileNames);
            onChange(pIds);
        });
    };

    return (
        <>
            <DropzoneDialogBase
                fullWidth
                dialogTitle="Upload Images"
                acceptedFiles={['image/*']}
                fileObjects={files}
                cancelButtonText={'cancel'}
                submitButtonText={'submit'}
                maxFileSize={5000000}
                filesLimit={10}
                open={open}
                onAdd={(fileObjs) => setFiles(files.concat(fileObjs))}
                onDelete={(deleteFileObj) =>
                    setFiles(files.filter((file) => file.file.name === deleteFileObj.file.name))
                }
                onClose={() => setOpen(false)}
                onSave={handleOnSave}
                showPreviews={true}
                showFileNamesInPreview={true}
            />
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    {uploading ? (
                        <CircularProgress />
                    ) : (
                        <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
                            Upload Images
                        </Button>
                    )}
                </Grid>
                <Grid item>
                    {uploadedFileNames.length !== 0 && (
                        <Typography variant="caption" color="textPrimary">
                            {uploadedFileNames.join(', ')}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </>
    );
};
