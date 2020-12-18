import React from 'react';
import { Route } from 'react-router-dom';
import { AbsoluteHeader } from '../Header/AbsoluteHeader';
import { LayoutRoute } from './LayoutRoute';

export const HomeLayoutRoute = ({ onThemeToggle, ...rest }: LayoutRoute) => (
    <>
        <AbsoluteHeader onThemeToggle={onThemeToggle} />
        <Route {...rest} />
    </>
);
