import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { SlideshowProperties } from '../../constants/SlideshowProperties';
import { SlideshowItem } from './SlideshowItem';

export const Slideshow = () => {
    return (
        <Carousel indicators={false}>
            {SlideshowProperties.map((item, index) => (
                <SlideshowItem key={index} src={item.src} name={item.name} />
            ))}
        </Carousel>
    );
};
