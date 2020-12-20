import React from 'react';
import { Slideshow } from '../Slideshow/Slideshow';
import { AboutUs } from '../AboutUs/AboutUs';
import { Stories } from '../Stories/Stories';
import { Footer } from '../Footer/Footer';
import { ContactUsContainer } from '../ContactUs/ContactUsContainer';

export const Home = () => {
    return (
        <>
            <Slideshow />
            <AboutUs />
            <Stories />
            <ContactUsContainer />
            <Footer />
        </>
    );
};
