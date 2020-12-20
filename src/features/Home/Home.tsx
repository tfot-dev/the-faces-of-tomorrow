import React from 'react';
import { Slideshow } from '../Slideshow/Slideshow';
import { AboutUs } from '../AboutUs/AboutUs';
import { Stories } from '../Stories/Stories';
import { ContactUs } from '../ContactUs/ContactUs';
import { Footer } from '../Footer/Footer';
import { PublicApi } from '../Api/PublicApi';

export const Home = () => {
    return (
        <>
            <Slideshow />
            <AboutUs />
            <Stories />
            <PublicApi>
                <ContactUs />
            </PublicApi>
            <Footer />
        </>
    );
};
