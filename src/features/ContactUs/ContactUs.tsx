import React from 'react';
import { Box, createStyles, Grid, TextField, Theme, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[50],
            height: 300,
            padding: 5,
        },
    }),
);

export const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center" color="textPrimary">
                Contact Us!
            </Typography>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="Name" fullWidth name="observedEffects" inputRef={register} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Email" fullWidth name="observedEffects" inputRef={register} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="How can we help you?"
                            fullWidth
                            name="observedEffects"
                            inputRef={register}
                            multiline
                            rows={6}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
