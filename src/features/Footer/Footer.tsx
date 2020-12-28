import React from 'react';
import { BottomNavigation, Grid, IconButton, Link } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { SocialMediaLinks } from '../../constants/SocialMediaLinks';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
    const onSocialMediaIconClick = (urL: SocialMediaLinks) => {
        const win = window.open(urL, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    return (
        <BottomNavigation>
            <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item>
                    <IconButton onClick={() => onSocialMediaIconClick(SocialMediaLinks.Instagram)}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => onSocialMediaIconClick(SocialMediaLinks.Facebook)}>
                        <FacebookIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} target="_blank" to="/privacy" variant="caption">
                        Privacy
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} target="_blank" to="/termsandconditions" variant="caption">
                        Terms and Conditions
                    </Link>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
};
