import React from 'react';
import { Box, Card, CardContent, createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSendInquiriesMutation } from '../../generated/graphql';
import { ContactUsForm } from './ContactUsForm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[100],
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
        },
        card: {
            margin: '0 20px',
        },
        cardContent: {
            paddingTop: theme.spacing(4),
        },
    }),
);

export const ContactUs = () => {
    const [sendInquiry] = useSendInquiriesMutation();
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h3" align="center" color="secondary">
                        <Box fontWeight="fontWeightBold">Contact Us!</Box>
                    </Typography>
                    <Grid container direction="column" spacing={2} alignItems="center" className={classes.cardContent}>
                        <Grid item xs>
                            <Typography align="center" variant="body2">
                                We, at The Faces of Tomorrow, share inspiring stories of people from all around the
                                world, who with their sustainable actions are trying to save the planet! We are always
                                looking out for individuals who would like to contribute to our team in any way
                                possible. If you love what we do and want to work with us, write us below!
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <ContactUsForm onSubmit={(data) => sendInquiry({ variables: data })} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};
