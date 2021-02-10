import React from 'react';
import { Slideshow } from '../Slideshow/Slideshow';
import { AboutUs } from '../AboutUs/AboutUs';
import { Stories } from '../Stories/Stories';
import { Footer } from '../Footer/Footer';
import { ContactUs } from '../ContactUs/ContactUs';
import { Helmet } from 'react-helmet';

export const Home = () => {
    return (
        <>
            <Helmet>
                <title> The Faces of Tomorrow | TFOT </title>
            </Helmet>
            <Slideshow />
            <AboutUs />
            <Stories />
            <ContactUs />
            <Footer />
        </>
    );
};
