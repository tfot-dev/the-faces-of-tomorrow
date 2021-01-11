import React from 'react';
import { Your_Story } from '../../generated/graphql';
import { Divider, Grid, Typography } from '@material-ui/core';

type YourStoryContentDetailsType = {
    yourStory: Your_Story;
};

export const YourStoryContentDetails = ({ yourStory }: YourStoryContentDetailsType) => {
    const { advise, inspiration, need, observedEffects, projectIdea } = yourStory;

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {advise}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {inspiration}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {need}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {observedEffects}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {projectIdea}
                </Typography>
            </Grid>
            <Divider />
        </>
    );
};
