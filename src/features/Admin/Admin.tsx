import React from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';

export const Admin = () => {
    return (
        <div>
            <MiniDrawer tabs={AdminSideNavItems} />
        </div>
    );
};
