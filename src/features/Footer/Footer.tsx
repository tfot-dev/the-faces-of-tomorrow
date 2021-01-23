import React from 'react';
import { Grid, IconButton, Link, Paper } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { SocialMediaLinks } from '../../constants/SocialMediaLinks';
import { Link as RouterLink } from 'react-router-dom';
import { openLinkInNewTab } from '../../utils/link';
import { Routes } from '../../constants/Routes';

export const Footer = () => (
    <Paper>
        <Grid container alignItems="center" justify="center" spacing={1} style={{ width: '100%' }}>
            <Grid item>
                <IconButton onClick={() => openLinkInNewTab(SocialMediaLinks.Instagram)}>
                    <InstagramIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton onClick={() => openLinkInNewTab(SocialMediaLinks.Facebook)}>
                    <FacebookIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <Link component={RouterLink} target="_blank" to={Routes.Privacy} variant="caption">
                    Privacy
                </Link>
            </Grid>
            <Grid item>
                <Link component={RouterLink} target="_blank" to={Routes.TermsAndConditions} variant="caption">
                    Terms and Conditions
                </Link>
            </Grid>
        </Grid>
    </Paper>
);
