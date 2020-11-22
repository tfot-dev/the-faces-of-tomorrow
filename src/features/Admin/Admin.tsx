import React from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';
import AddIcon from '@material-ui/icons/Add';
import { createStyles, Fab, Theme } from '@material-ui/core';
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

    return (
        <div>
            <MiniDrawer tabs={AdminSideNavItems} />
            <Fab aria-label="Create" className={classes.fab} color="secondary">
                <AddIcon />
            </Fab>
        </div>
    );
};
