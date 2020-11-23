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
    TextField,
    Theme,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { ICreateEmailForm } from '../Admin/Admin';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    }),
);

interface CreateEmailDialogProps {
    onSend: (data: ICreateEmailForm) => void;
}

export const CreateEmailDialog = ({ onSend }: CreateEmailDialogProps) => {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const onSubmit = (data: ICreateEmailForm) => onSend(data);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="Create Message">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id="form-dialog-title">Create Message</DialogTitle>
                    <DialogContent>
                        <DialogContentText>This message will be send as a normal email to the user.</DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            name="email"
                            inputRef={register}
                        />
                        <TextField
                            margin="dense"
                            id="subject"
                            label="Subject"
                            fullWidth
                            name="subject"
                            inputRef={register}
                        />
                        <TextField
                            margin="dense"
                            id="message"
                            label="Message"
                            multiline
                            rows={10}
                            fullWidth
                            name="message"
                            inputRef={register}
                        />
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
