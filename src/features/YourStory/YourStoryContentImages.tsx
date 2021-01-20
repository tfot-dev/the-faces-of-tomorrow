import React from 'react';
import { Your_Story } from '../../generated/graphql';
import { Grid, GridList, GridListTile, GridListTileBar, IconButton, Link, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import { Cloudinary } from '../../constants/Cloudinary';

type YourStoryContentImagesType = {
    yourStory: Your_Story;
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        width: '100%',
    },
    gridItem: {
        height: '100%',
        width: 'initial',
    },
    gridTileBar: {
        color: common.white,
    },
});

export const YourStoryContentImages = ({ yourStory }: YourStoryContentImagesType) => {
    const classes = useStyles();
    const { pictures } = yourStory;

    const pictureUrls = pictures.split(',');

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6">Images</Typography>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={0}>
                        {pictureUrls.map((picture) => (
                            <GridListTile key={picture}>
                                <img className={classes.gridItem} src={Cloudinary.ThumbnailUrl(picture)} />
                                <GridListTileBar
                                    title="Download"
                                    className={classes.gridTileBar}
                                    actionIcon={
                                        <IconButton>
                                            <Link href={Cloudinary.DownloadUrl(picture)}>
                                                <CloudDownload />
                                            </Link>
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
