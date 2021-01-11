import React from 'react';
import { Your_Story } from '../../generated/graphql';
import { Grid, GridList, GridListTile, GridListTileBar, IconButton, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

type YourStoryContentImagesType = {
    yourStory: Your_Story;
};

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

export const YourStoryContentImages = ({ yourStory }: YourStoryContentImagesType) => {
    const classes = useStyles();
    const { pictures } = yourStory;

    const pictureUrls = pictures.split(',');

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">
                    Attachments
                </Typography>
            </Grid>
            <Grid item>
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
            </Grid>
        </>
    );
};
