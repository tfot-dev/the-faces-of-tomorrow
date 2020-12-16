import { RouteProps } from 'react-router';
import { PaletteType } from '@material-ui/core';

export type LayoutRoute = RouteProps & {
    onThemeChange: (mode: PaletteType) => void;
};
