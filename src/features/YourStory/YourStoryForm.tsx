import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Your_Story } from '../../generated/graphql';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@material-ui/core';

import { UploadImagesDialog } from './UploadImagesDialog';
import { Link as RouterLink } from 'react-router-dom';

type YourStoryFormType = {
    onSubmit: (data: Your_Story) => void;
};

export const YourStoryForm = ({ onSubmit }: YourStoryFormType) => {
    const { register, handleSubmit, setValue } = useForm();
    const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);

    useEffect(() => {
        register('pictures');
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardHeader title="Post Your Own Story!" />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="body1">Hey There!</Typography>
                            <br />
                            <Typography variant="body1">
                                Thank you for having an interest in sharing your story with us!
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                We are certain that sharing your stories could bring hope to others and inspire them to
                                take actions!
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                Please submit your responses in the form below (to be answered briefly). Once we have
                                your responses, we will get back to you with a final version of your story for your
                                approval.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                label="Name"
                                fullWidth
                                name="name"
                                inputRef={register}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                type="email"
                                fullWidth
                                name="email"
                                inputRef={register}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label="Instagram Handle"
                                fullWidth
                                name="instagram"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label="Blog/Website (if any)"
                                fullWidth
                                name="blog"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Tell us briefly about yourself (e.g. age, the city you are currently based at, and current occupation)"
                                fullWidth
                                name="about"
                                inputRef={register}
                                multiline
                                rows={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="How do you engage in environmental activism? (e.g. tell us about your project / idea / sustainable practice)"
                                fullWidth
                                name="projectIdea"
                                inputRef={register}
                                multiline
                                rows={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="What gave you the inspiration to work on that specific topic? (e.g. if you have a personal motivation, please share how it evolved and when/why you decided to take action)"
                                fullWidth
                                name="inspiration"
                                inputRef={register}
                                multiline
                                rows={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Could you observe changes since you started your project / idea / sustainable practice? (e.g. feedback and responses from friends, family, community etc.)"
                                fullWidth
                                name="observedEffects"
                                inputRef={register}
                                multiline
                                rows={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="What would be your piece of advice for people who are thinking of changing their lifestyle, or want to start something similar like you?"
                                fullWidth
                                name="advise"
                                inputRef={register}
                                multiline
                                rows={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Any other comments or personal request?"
                                fullWidth
                                name="comments"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <UploadImagesDialog onChange={(data) => setValue('pictures', data.join(','))} />
                        </Grid>
                        <Grid item xs={12}>
                            <Box fontWeight="fontWeightBold">
                                <Typography variant="body2">
                                    Very important: We need one portrait picture of you, and a few more about your work
                                    / project / sustainable practice (maximum 10 photos). You can also check out our
                                    Instagram or Website for reference.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />
                                }
                                label={
                                    <Typography variant="caption">
                                        I agree to the{' '}
                                        <Link
                                            component={RouterLink}
                                            target="_blank"
                                            to="/termsandconditions"
                                            variant="caption"
                                        >
                                            Terms and Conditions
                                        </Link>
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" color="secondary" variant="contained" disabled={!acceptTerms}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};
