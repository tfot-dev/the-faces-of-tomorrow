import React, { useState } from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';
import AddIcon from '@material-ui/icons/Add';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    }),
);

export const Admin = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MiniDrawer tabs={AdminSideNavItems} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="Create Message">
                <DialogTitle id="form-dialog-title">Create Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>This message will be send as a normal email to the user.</DialogContentText>
                    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
                    <TextField margin="dense" id="subject" label="Subject" fullWidth />
                    <TextField margin="dense" id="message" label="Message" multiline rows={10} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
            <Fab aria-label="Create" className={classes.fab} color="secondary" onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
        </div>
    );
};
