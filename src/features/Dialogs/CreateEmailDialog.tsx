import React, { useState } from 'react';
import {
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    Grid,
    TextField,
    Theme,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-build-classic-email/build/ckeditor';
import { useSnackbar } from 'notistack';
import { namedOperations, useSendEmailMutation } from '../../generated/graphql';
import { SmartSuggestions } from '../SmartSuggestions/SmartSuggestions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    }),
);

interface ICreateEmailForm {
    toAddress: string;
    message: string;
    subject: string;
}

export const CreateEmailDialog = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [sendEmail] = useSendEmailMutation({ refetchQueries: [namedOperations.Query.GetSentEmails] });
    const { register, handleSubmit, setValue } = useForm();
    const [open, setOpen] = useState(false);
    const [template, setTemplate] = useState('');
    const classes = useStyles();

    React.useEffect(() => {
        register('message');
    }, []);

    const onSubmit = (data: ICreateEmailForm) => {
        const { toAddress, subject, message } = data;
        sendEmail({ variables: { toAddress, subject, message } }).then(() => {
            enqueueSnackbar('Email sent successfully!', { variant: 'success' });
            handleClose();
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="Create Message" fullWidth maxWidth="xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id="form-dialog-title">Create Message</DialogTitle>
                    <DialogContent>
                        <DialogContentText>This message will be send as a normal email to the user.</DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    name="toAddress"
                                    inputRef={register}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    margin="dense"
                                    label="Subject"
                                    fullWidth
                                    name="subject"
                                    inputRef={register}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SmartSuggestions onSelect={setTemplate} />
                            </Grid>
                            <Grid item xs={12}>
                                <CKEditor
                                    editor={Editor}
                                    onChange={(event: unknown, editor: { getData: () => unknown }) => {
                                        const data = editor.getData();

                                        setValue('message', data);
                                    }}
                                    data={template}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Fab aria-label="Create" className={classes.fab} color="secondary" onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
        </>
    );
};
