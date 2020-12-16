import React from 'react';
import { Route } from 'react-router-dom';
import { OverlappingHeader } from '../Header/OverlappingHeader';
import { LayoutRoute } from './LayoutRoute';

export const HomeLayoutRoute = ({ onThemeChange, ...rest }: LayoutRoute) => (
    <>
        <OverlappingHeader onThemeChange={onThemeChange} />
        <Route {...rest} />
    </>
);
