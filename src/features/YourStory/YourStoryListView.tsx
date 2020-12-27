import React from 'react';
import { Box, createStyles, Divider, List, Theme } from '@material-ui/core';
import { Your_Story } from '../../generated/graphql';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { YourStoryListItem } from './YourStoryListItem';

type YourStoryListViewType = {
    yourStories: Your_Story[];
    yourStoryContent: React.ComponentType<unknown>;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const YourStoryListView = ({ yourStories, yourStoryContent }: YourStoryListViewType) => {
    const { url } = useRouteMatch();
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path={url}>
                <Box boxShadow={2}>
                    <List disablePadding className={classes.root}>
                        {yourStories.map(
                            (yourStory, index: number) =>
                                yourStory !== null && (
                                    <>
                                        <YourStoryListItem yourStory={yourStory} />
                                        {index !== yourStories.length - 1 && <Divider component="li" />}
                                    </>
                                ),
                        )}
                    </List>
                </Box>
            </Route>
            <Route path={`${url}/:yourStoryId`} component={yourStoryContent} />
        </Switch>
    );
};
