import React from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Inquiries } from '../../generated/graphql';

type ContactUsFormType = {
    onSubmit: (data: Inquiries) => void;
};

export const ContactUsForm = ({ onSubmit }: ContactUsFormType) => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <TextField size="small" label="Name" fullWidth name="name" inputRef={register} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField size="small" label="Email" fullWidth name="email" inputRef={register} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
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
    );
};
