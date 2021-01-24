import React from 'react';
import { Button, Snackbar } from '@material-ui/core';

export const CookiesConsent = () => {
    return (
        <Snackbar
            open
            autoHideDuration={6000}
            message="This site uses cookies from Google to deliver its services and to analyze traffic."
            action={
                <React.Fragment>
                    <Button color="secondary" size="small">
                        Accept
                    </Button>
                    <Button color="secondary" size="small">
                        Decline
                    </Button>
                </React.Fragment>
            }
        />
    );
};
