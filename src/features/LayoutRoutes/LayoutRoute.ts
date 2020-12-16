import { RouteProps } from 'react-router';

export type LayoutRoute = RouteProps & {
    onThemeToggle: (darkMode: boolean) => void;
};
