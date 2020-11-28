import React from 'react';
import { createStyles, Divider, List, Theme } from '@material-ui/core';
import { EmailListItem } from './EmailListItem';
import { Email, SentEmail } from '../../generated/graphql';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

interface EmailListViewProps {
    emails: (Email | SentEmail | null)[];
    emailContent: React.ComponentType<unknown>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const EmailListView = ({ emails, emailContent }: EmailListViewProps) => {
    const { url } = useRouteMatch();
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path={url}>
                <List disablePadding className={classes.root}>
                    {emails.map(
                        (email, index: number) =>
                            email !== null && (
                                <>
                                    <EmailListItem email={email} />
                                    {index !== emails.length - 1 && <Divider component="li" />}
                                </>
                            ),
                    )}
                </List>
            </Route>
            <Route path={`${url}/:messageId`} component={emailContent} />
        </Switch>
    );
};
