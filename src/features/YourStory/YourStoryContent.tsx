import React from 'react';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    LinearProgress,
    Typography,
} from '@material-ui/core';
import { useGetYourStoryQuery, useReadStatusMutation } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import { Error } from '../Error/Error';
import { makeStyles } from '@material-ui/core/styles';
import { CloudDownload } from '@material-ui/icons';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
    },
    gridItem: {
        width: 200,
    },
});

export const YourStoryContent = () => {
    const classes = useStyles();
    const { params } = useRouteMatch<{ yourStoryId: string }>();
    const { user } = useAuth0();
    const { loading, error, data } = useGetYourStoryQuery({ variables: { id: params.yourStoryId } });
    const [setReadStatus] = useReadStatusMutation();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.your_story_by_pk) {
        return null;
    }

    const {
        name,
        email,
        advise,
        age,
        city,
        inspiration,
        need,
        observedEffects,
        occupation,
        projectIdea,
        read_status,
        pictures,
        id,
    } = data.your_story_by_pk;

    const pictureUrls = pictures.split(',');

    if (!read_status) {
        setReadStatus({
            variables: {
                id,
                user_id: user.sub,
            },
        });
    }

    console.log({ pictures, pictureUrls });

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{name.substr(0, 1)}</Avatar>}
                title={`${name} (${age}), ${occupation}, ${city}`}
                subheader={email}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {advise}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {inspiration}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {need}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {observedEffects}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {projectIdea}
                </Typography>
                <Divider />
                <Typography variant="h6" color="textSecondary">
                    Attachments
                </Typography>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={4}>
                        {pictureUrls.map((picture) => (
                            <GridListTile key={picture}>
                                <img
                                    className={classes.gridItem}
                                    src={`https://res.cloudinary.com/thefacesoftomorrow/image/upload/v26789735/${picture}`}
                                />
                                <GridListTileBar
                                    title="Download"
                                    actionIcon={
                                        <IconButton>
                                            <CloudDownload />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </CardContent>
        </Card>
    );
};