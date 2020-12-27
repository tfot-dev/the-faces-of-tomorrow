import React from 'react';
import { Box, createStyles, Divider, List, Theme } from '@material-ui/core';
import { Inquiries } from '../../generated/graphql';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

interface InquiriesListViewProps {
    inquiries: Inquiries[];
    inquiryContent: React.ComponentType<unknown>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const InquiriesListView = ({ inquiries, inquiryContent }: InquiriesListViewProps) => {
    const { url } = useRouteMatch();
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path={url}>
                <Box boxShadow={2}>
                    <List disablePadding className={classes.root}>
                        {inquiries.map(
                            (inquiry, index: number) =>
                                inquiry !== null && (
                                    <>
                                        <div>{inquiry.email}</div>
                                        <div>{inquiry.id}</div>
                                        <div>{inquiry.name}</div>
                                        <div>{inquiry.query}</div>
                                        {index !== inquiries.length - 1 && <Divider component="li" />}
                                    </>
                                ),
                        )}
                    </List>
                </Box>
            </Route>
            <Route path={`${url}/:inquiryId`} component={inquiryContent} />
        </Switch>
    );
};
