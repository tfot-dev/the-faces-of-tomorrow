import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={4} direction="column">
            {/* About */}

            <Grid item>
                <Typography variant="h3">{t('privacyPolicy.about')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.about1')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.about2')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.about3')}</Typography>
            </Grid>

            {/* Personal Information */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.personalInformation')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.personalInformation1')}</Typography>
            </Grid>
            <ol type="a">
                <li>
                    <Typography variant="body1">
                        <strong>{`${t('postYourOwnStory.title')}: `}</strong>
                        {t('privacyPolicy.personalInformation2')}
                    </Typography>
                    <ol type="i">
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.name')}: `}</strong>
                                {t('privacyPolicy.personalInformation3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.email')}: `}</strong>
                                {t('privacyPolicy.personalInformation4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.insta')}: `}</strong>
                                {t('privacyPolicy.personalInformation5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.blog')}: `}</strong>
                                {t('privacyPolicy.personalInformation6')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.pictures')}: `}</strong>
                                {t('privacyPolicy.personalInformation7')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.otherInfo')}: `}</strong>
                                {t('privacyPolicy.personalInformation8')}
                            </Typography>
                        </li>
                    </ol>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>{`${t('contactUs.title')}: `}</strong>
                        {t('privacyPolicy.personalInformation2')}
                    </Typography>
                    <ol type="i">
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.name')}: `}</strong>
                                {t('privacyPolicy.personalInformation3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                <strong>{`${t('postYourOwnStory.email')}: `}</strong>
                                {t('privacyPolicy.personalInformation4')}
                            </Typography>
                        </li>
                    </ol>
                </li>
            </ol>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.personalInformation9')}</Typography>
            </Grid>

            {/* Protect Your Data */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.protectData')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.protectData1')}</Typography>
            </Grid>

            {/* Delete Your Data */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.deletePersonalInformation')}</Typography>
            </Grid>
            <ol type="1">
                <li>
                    <Typography variant="body1">{t('privacyPolicy.deletePersonalInformation1')}</Typography>
                    <ol type="a">
                        <li>
                            <Typography variant="body1">{t('privacyPolicy.deletePersonalInformation2')}</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">{t('privacyPolicy.deletePersonalInformation3')}</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">{t('privacyPolicy.deletePersonalInformation4')}</Typography>
                        </li>
                    </ol>
                </li>
                <li>
                    <Typography variant="body1">{t('privacyPolicy.deletePersonalInformation5')}</Typography>
                </li>
            </ol>

            {/* Information Disclose */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.informationDisclose')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.informationDisclose1')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.informationDisclose2')}</Typography>
            </Grid>

            {/* Disclaimer */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.disclaimer')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.disclaimer1')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.disclaimer2')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.disclaimer3')}</Typography>
            </Grid>

            {/* Changes to Policy */}
            <Grid item>
                <Typography variant="h4">{t('privacyPolicy.changes')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.changes1')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{t('privacyPolicy.changes2')}</Typography>
            </Grid>
        </Grid>
    );
};
