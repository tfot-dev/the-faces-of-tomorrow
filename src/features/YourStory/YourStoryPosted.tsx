import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

export const YourStoryPosted = () => {
    return (
        <Grid container alignItems="center" alignContent="center" justify="center">
            <Grid item>
                <Card>
                    <CardHeader
                        title={
                            <Typography align="center" variant="h4">
                                <Box fontWeight={900}>Congratulations!</Box>
                            </Typography>
                        }
                        disableTypography
                    />
                    <CardContent>
                        <Typography align="center" variant="body1">
                            We have received your story. Now sit back and let us do all the work. We will get back to
                            you with a final version of the story for your approval before publishing it online. Thank
                            you for sharing your journey!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
