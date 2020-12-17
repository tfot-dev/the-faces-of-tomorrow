import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@material-ui/core';

type YourStoryForm = {
    name: string;
    email: string;
    city: string;
    age: number;
    occupation: string;
    projectIdea: string;
    inspiration: string;
    need: string;
    observedEffects: string;
    advise: string;
    pictures: string;
};

export const YourStory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: YourStoryForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardHeader title="Post Your Own Story!" />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                label="Name"
                                fullWidth
                                name="name"
                                inputRef={register}
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
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant="outlined" label="City" fullWidth name="city" inputRef={register} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                label="Age"
                                type="number"
                                fullWidth
                                name="age"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                label="Occupation"
                                fullWidth
                                name="occupation"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="How did you develop your project/idea/sustainable practice?"
                                fullWidth
                                name="projectIdea"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="What inspired you to work on this specific topic?"
                                fullWidth
                                name="inspiration"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Why is it important for you to work on this particular issue? (If you have a personal motivation, please share how it evolved and when/why you decided to take action)."
                                fullWidth
                                name="need"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Did you observe any changes since starting your project? (ex. Feedback and responses from friends, family, community etc.)."
                                fullWidth
                                name="observedEffects"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="What would you say to people who are thinking of changing their lifestyle, or who want to start a similar project? (ex. What “advice” would you give them?)"
                                fullWidth
                                name="advise"
                                inputRef={register}
                                multiline
                                rows={10}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button type="submit" color="secondary" variant="contained">
                        Send
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};
