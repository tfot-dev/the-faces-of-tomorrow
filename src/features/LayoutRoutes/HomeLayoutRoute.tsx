import React from 'react';
import { Route } from 'react-router-dom';
import { OverlappingHeader } from '../Header/OverlappingHeader';
import { LayoutRoute } from './LayoutRoute';

export const HomeLayoutRoute = ({ onThemeToggle, ...rest }: LayoutRoute) => (
    <>
        <OverlappingHeader onThemeToggle={onThemeToggle} />
        <Route {...rest} />
    </>
);
