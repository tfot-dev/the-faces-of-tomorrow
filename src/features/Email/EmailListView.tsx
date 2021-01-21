import React from 'react';
import { Box, createStyles, Divider, List, Theme } from '@material-ui/core';
import { EmailListItem } from './EmailListItem';
import { Email } from '../../generated/graphql';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

interface EmailListViewProps {
    emails: (Email | null)[];
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
                <Box boxShadow={2}>
                    <List disablePadding className={classes.root}>
                        {emails.map(
                            (email, index: number) =>
                                email !== null && (
                                    <React.Fragment key={email.messageId}>
                                        <EmailListItem email={email} />
                                        {index !== emails.length - 1 && <Divider component="li" />}
                                    </React.Fragment>
                                ),
                        )}
                    </List>
                </Box>
            </Route>
            <Route path={`${url}/:folderId/:messageId`} component={emailContent} />
        </Switch>
    );
};
