import React from 'react';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer';
import { AdminSideNavItems } from '../../constants/AdminSideNavItems';
import { CreateEmailDialog } from '../Dialogs/CreateEmailDialog';
import { useSendEmailMutation } from '../../generated/graphql';

export const Admin = () => {
    const [sendEmail] = useSendEmailMutation();

    return (
        <div>
            <MiniDrawer tabs={AdminSideNavItems} />
            <CreateEmailDialog
                onSend={({ email, subject, message }) =>
                    sendEmail({ variables: { toAddress: email, subject, message } })
                }
            />
        </div>
    );
};
