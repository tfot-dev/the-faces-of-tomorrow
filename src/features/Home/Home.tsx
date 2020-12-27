import React from 'react';
import { Slideshow } from '../Slideshow/Slideshow';
import { AboutUs } from '../AboutUs/AboutUs';
import { Stories } from '../Stories/Stories';
import { Footer } from '../Footer/Footer';
import { ContactUs } from '../ContactUs/ContactUs';

export const Home = () => {
    return (
        <>
            <Slideshow />
            <AboutUs />
            <Stories />
            <ContactUs />
            <Footer />
        </>
    );
};
