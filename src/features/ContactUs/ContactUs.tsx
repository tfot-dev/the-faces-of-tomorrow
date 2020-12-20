import React from 'react';
import { Box, Card, CardContent, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSendInquiriesMutation } from '../../generated/graphql';
import { ContactUsForm } from './ContactUsForm';

type ContactUsForm = {
    name: string;
    email: string;
    query: string;
};

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
                    <ContactUsForm onSubmit={(data) => sendInquiry({ variables: data })} />
                </CardContent>
            </Card>
        </Box>
    );
};
