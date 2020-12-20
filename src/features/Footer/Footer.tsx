import React from 'react';
import { BottomNavigation, Grid, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { SocialMediaLinks } from '../../constants/SocialMediaLinks';

export const Footer = () => {
    const onSocialMediaIconClick = (urL: SocialMediaLinks) => {
        const win = window.open(urL, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    return (
        <BottomNavigation>
            <Grid container alignItems="center" justify="center">
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
            </Grid>
        </BottomNavigation>
    );
};
