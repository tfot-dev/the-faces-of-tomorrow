import React from 'react';
import { Divider } from '@material-ui/core';
import { EmailListItem } from './EmailListItem';
import { Email } from '../../generated/graphql';

interface EmailListViewProps {
    emails: (Email | null)[];
}

export const EmailListView = ({ emails }: EmailListViewProps) => (
    <>
        {emails.map(
            (email, index: number) =>
                email !== null && (
                    <>
                        <EmailListItem email={email} />
                        {index !== emails.length - 1 && <Divider component="li" />}
                    </>
                ),
        )}
    </>
);
