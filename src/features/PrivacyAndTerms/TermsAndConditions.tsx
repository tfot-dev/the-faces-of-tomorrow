import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const TermsAndConditions = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={4} direction="column">
            {/* About*/}
            <Grid item>
                <Typography variant="h3">{t('termsAndConditions.about')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('termsAndConditions.about1')}</Typography>
            </Grid>

            <ol type="1">
                {/* Terms */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.terms')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.terms1')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.terms2')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.terms3')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Use License */}
                <li>
                    <Typography variant="h4">{t('termsAndConditions.useLicense')}</Typography>
                    <ol type="a">
                        <li>
                            <Typography variant="body1">{t('termsAndConditions.useLicense1')}</Typography>
                            <ol type="i">
                                <li>
                                    <Typography variant="body1">{t('termsAndConditions.useLicense2')}</Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">{t('termsAndConditions.useLicense3')}</Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">{t('termsAndConditions.useLicense4')}</Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">{t('termsAndConditions.useLicense5')}</Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">{t('termsAndConditions.useLicense6')}</Typography>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <Typography variant="body1">{t('termsAndConditions.useLicense7')}</Typography>
                        </li>
                    </ol>
                </li>

                {/* Communications */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.communications')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.communications1')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Disclaimer */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.disclaimer')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.disclaimer1')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.disclaimer2')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Limitations */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.limitations')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.limitations1')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Accuracy */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.accuracy')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.accuracy1')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Links */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.links')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.links1')}</Typography>
                        </Grid>
                    </Grid>
                </li>

                {/* Modifications */}
                <li>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4">{t('termsAndConditions.modifications')}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{t('termsAndConditions.modifications1')}</Typography>
                        </Grid>
                    </Grid>
                </li>
            </ol>
        </Grid>
    );
};
