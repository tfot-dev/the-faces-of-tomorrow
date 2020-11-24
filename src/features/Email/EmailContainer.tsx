import React from 'react';
import { createStyles, List, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmailListView } from './EmailListView';
import { useGetAllEmailsQuery } from '../../generated/graphql';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { EmailItemContent } from './EmailItemContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const EmailContainer: React.FC = () => {
    const { url, path, params } = useRouteMatch();
    const classes = useStyles();
    const { loading, error, data } = useGetAllEmailsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data?.emails) {
        return null;
    }

    console.log({ url, path, params, data });

    return (
        <Switch>
            <Route exact path={url}>
                <List className={classes.root}>
                    <EmailListView emails={data.emails} />
                </List>
            </Route>
            <Route path={`${url}/:messageId`} component={EmailItemContent} />
        </Switch>
    );
};
