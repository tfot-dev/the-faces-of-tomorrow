import React from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';
import { CreateEmailDialog } from '../Dialogs/CreateEmailDialog';

export const Admin = () => {
    return (
        <>
            <MiniDrawer tabs={AdminSideNavItems} />
            <CreateEmailDialog />
        </>
    );
};
