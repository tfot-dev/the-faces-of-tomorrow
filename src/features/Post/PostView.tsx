import React from 'react';
import { Media } from '../../generated/graphql';
import { Card, CardContent, createStyles, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { PostViewImage } from './PostViewImage';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { getPostTitle } from '../../utils/scrapeCaption';

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            position: 'sticky',
        },
        caption: {
            whiteSpace: 'pre-line',
        },
    }),
);

type PostViewType = {
    caption: string;
    media: (Media | null)[];
};

export const PostView = ({ caption, media }: PostViewType) => {
    const classes = useStyles();

    const [actualCardHeight, setActualCardHeight] = React.useState(0);
    const postViewCard = React.useCallback((node) => {
        if (node !== null) {
            setActualCardHeight(node.getBoundingClientRect().height);
        }
    }, []);

    const calculatedTop = window.innerHeight - actualCardHeight;
    const pageTitle = getPostTitle(caption);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Card className={classes.card} ref={postViewCard} style={{ top: calculatedTop }}>
                {media !== null && (
                    <Carousel autoPlay={false}>
                        {media.map(
                            (mediaInfo, index) =>
                                mediaInfo !== null && (
                                    <PostViewImage key={index} src={mediaInfo.thumbnail_url || mediaInfo.media_url} />
                                ),
                        )}
                    </Carousel>
                )}
                <CardContent>
                    <Typography variant="caption" color="textPrimary" className={classes.caption}>
                        {caption}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};
