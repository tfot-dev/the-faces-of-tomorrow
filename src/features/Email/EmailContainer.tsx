import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {
    Avatar,
    createStyles,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Theme,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Emails = gql`
    query GetAllEmails {
        emails {
            summary
            sentDateInGMT
            subject
            messageId
            toAddress
            sender
            receivedTime
            fromAddress
            folderId
        }
    }
`;

interface IEmail {
    summary: string;
    sentDateInGMT: string;
    subject: string;
    messageId: string;
    toAddress: string;
    sender: string;
    receivedTime: string;
    fromAddress: string;
    folderId: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);

export const EmailContainer: React.FC = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(Emails);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <List className={classes.root}>
            {data.emails.map((email: IEmail, index: number) => {
                return (
                    <>
                        <ListItem button alignItems="flex-start" key={email.toAddress}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={email.subject}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {email.sender}
                                        </Typography>
                                        {` — ${email.summary}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        {index !== data.emails.length - 1 && <Divider component="li" />}
                    </>
                );
            })}
        </List>
    );
};
