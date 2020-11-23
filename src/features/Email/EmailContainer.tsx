import React from 'react';
import { createStyles, List, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmailListView } from './EmailListView';
import { useGetAllEmailsQuery } from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const EmailContainer: React.FC = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllEmailsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data?.emails) {
        return null;
    }

    console.log(data);

    return (
        <List className={classes.root}>
            <EmailListView emails={data.emails} />
        </List>
    );
};
