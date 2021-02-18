import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Your_Story } from '../../generated/graphql';
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    createStyles,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';

import { UploadImagesDialog } from './UploadImagesDialog';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';

type YourStoryFormType = {
    onSubmit: (data: Your_Story) => void;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        intro: {
            backgroundColor: theme.palette.primary.main,
            color: common.white,
        },
    }),
);

export const YourStoryForm = ({ onSubmit }: YourStoryFormType) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const { register, handleSubmit, setValue } = useForm();
    const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);

    useEffect(() => {
        register('pictures');
    }, []);

    return (
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Typography variant="h4" align="center" color="textSecondary">
                    <b>{t('postYourOwnStory.title')}</b>
                </Typography>
            </Grid>
            <Grid item>
                <Card className={classes.intro}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body1">{t('postYourOwnStory.welcome1')}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" component="p">
                                    {t('postYourOwnStory.welcome2')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" component="p">
                                    {t('postYourOwnStory.welcome3')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" component="p">
                                    {t('postYourOwnStory.welcome4')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        label={t('postYourOwnStory.name')}
                                        fullWidth
                                        name="name"
                                        inputRef={register}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        label={t('postYourOwnStory.email')}
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
                                        label={t('postYourOwnStory.insta')}
                                        fullWidth
                                        name="instagram"
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        label={t('postYourOwnStory.blog')}
                                        fullWidth
                                        name="blog"
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.about')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="about"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        required
                                        placeholder={t('postYourOwnStory.yourAnswer')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.projectIdea')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="projectIdea"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        required
                                        placeholder={t('postYourOwnStory.yourAnswer')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.inspiration')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="inspiration"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        required
                                        placeholder={t('postYourOwnStory.yourAnswer')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.observedEffects')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="observedEffects"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        required
                                        placeholder={t('postYourOwnStory.yourStory')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.advise')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="advise"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        required
                                        placeholder={t('postYourOwnStory.yourAnswer')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{t('postYourOwnStory.comments')}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="comments"
                                        inputRef={register}
                                        multiline
                                        rows={10}
                                        placeholder={t('postYourOwnStory.yourComments')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <UploadImagesDialog onChange={(data) => setValue('pictures', data.join(','))} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box fontWeight="fontWeightBold">
                                        <Typography variant="body2">{t('postYourOwnStory.note')}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={acceptTerms}
                                                onChange={() => setAcceptTerms(!acceptTerms)}
                                            />
                                        }
                                        label={
                                            <Typography variant="caption">
                                                I agree to the{' '}
                                                <Link
                                                    component={RouterLink}
                                                    target="_blank"
                                                    to={Routes.Privacy}
                                                    variant="caption"
                                                >
                                                    {t('privacyPolicy.about')}
                                                </Link>
                                                {' and '}
                                                <Link
                                                    component={RouterLink}
                                                    target="_blank"
                                                    to={Routes.TermsAndConditions}
                                                    variant="caption"
                                                >
                                                    {t('termsAndConditions.about')}
                                                </Link>
                                            </Typography>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" color="secondary" variant="contained" disabled={!acceptTerms}>
                                        {t('buttons.send')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
