import React from 'react';
import { PublicApi } from '../Api/PublicApi';
import { ContactUs } from './ContactUs';

export const ContactUsContainer = () => {
    return (
        <PublicApi>
            <ContactUs />
        </PublicApi>
    );
};
