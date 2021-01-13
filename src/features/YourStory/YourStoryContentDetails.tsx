import React from 'react';
import { Your_Story } from '../../generated/graphql';
import { Divider, Grid, Typography } from '@material-ui/core';

type YourStoryContentDetailsType = {
    yourStory: Your_Story;
};

export const YourStoryContentDetails = ({ yourStory }: YourStoryContentDetailsType) => {
    const { advise, inspiration, blog, comments, about, instagram, observedEffects, projectIdea } = yourStory;

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6">Instagram Handle</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {instagram}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Blog / Website</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {blog}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Tell us briefly about yourself (e.g. age, the city you are currently based at, and current
                    occupation)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {about}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    How do you engage in environmental activism? (e.g. tell us about your project / idea / sustainable
                    practice)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {projectIdea}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    What gave you the inspiration to work on that specific topic? (e.g. if you have a personal
                    motivation, please share how it evolved and when/why you decided to take action)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {inspiration}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Could you observe changes since you started your project / idea / sustainable practice? (e.g.
                    feedback and responses from friends, family, community etc.)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {observedEffects}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    What would be your piece of advice for people who are thinking of changing their lifestyle, or want
                    to start something similar like you?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {advise}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Any other comments or personal request?</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {comments}
                </Typography>
            </Grid>
            <Divider />
        </>
    );
};
