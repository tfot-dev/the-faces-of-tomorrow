import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        footer: {
            position: 'fixed',
            bottom: 0,
            paddingBottom: 10,
        },
        offset: theme.mixins.toolbar,
    }),
);

export interface ITab {
    label: string;
    icon: React.ElementType;
}

interface MiniDrawerProps {
    tabs: ITab[];
}

export const MiniDrawer = ({ tabs }: MiniDrawerProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    {tabs.map(({ label, icon: LabelIcon }) => (
                        <ListItem button key={label}>
                            <ListItemIcon>
                                <LabelIcon />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <div className={classes.footer}>
                    <IconButton onClick={handleDrawerClick}>
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
            </Drawer>
            <main className={classes.content}></main>
        </div>
    );
};
