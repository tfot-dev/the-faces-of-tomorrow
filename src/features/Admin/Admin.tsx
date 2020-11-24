import React from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';
import { CreateEmailDialog } from '../Dialogs/CreateEmailDialog';
import { AuthenticatedApi } from '../Api/AuthenticatedApi';

export const Admin = () => {
    return (
        <AuthenticatedApi>
            <MiniDrawer tabs={AdminSideNavItems} />
            <CreateEmailDialog />
        </AuthenticatedApi>
    );
};
