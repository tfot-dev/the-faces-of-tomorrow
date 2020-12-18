import React from 'react';
import { Box, Button, Card, CardContent, createStyles, Grid, TextField, Theme, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

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
    }),
);

export const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const classes = useStyles();

    const onSubmit = (data: ContactUsForm) => {
        console.log(data);
    };

    return (
        <Box className={classes.root}>
            <Card>
                <CardContent>
                    <Typography variant="h3" align="center" color="secondary">
                        <Box fontWeight="fontWeightBold">Contact Us!</Box>
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box display="flex" justifyContent="space-evenly" margin={5}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={6}>
                                    <TextField label="Name" fullWidth name="name" inputRef={register} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="Email" fullWidth name="email" inputRef={register} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="How can we help you?"
                                        fullWidth
                                        name="query"
                                        inputRef={register}
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid container item xs={12} justify="center">
                                    <Button type="submit" color="secondary" variant="contained">
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};
