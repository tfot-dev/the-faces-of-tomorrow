import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ITab } from './MiniDrawer';

interface MiniDrawerContentProps {
    tabs: ITab[];
    routeSelected: (route: string) => void;
}

export const MiniDrawerContent = ({ tabs, routeSelected }: MiniDrawerContentProps) => {
    const { params } = useRouteMatch<{ tabId: string }>();
    let DrawerContent = undefined;

    const foundTabItem = tabs.find((tab) => tab.route.replace('/', '') === params.tabId);

    if (foundTabItem) {
        DrawerContent = foundTabItem.component;
        routeSelected(params.tabId);
    }

    return DrawerContent ? <DrawerContent /> : null;
};
