import React, { useEffect, useState } from 'react';
import { PostsResponse, useGetMorePostsLazyQuery } from '../../generated/graphql';
import { Post } from './Post';
import { Button, CircularProgress, Grid, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type MoreStoriesContentType = {
    posts: PostsResponse;
};

const useStyles = makeStyles({
    gridList: {
        justifyContent: 'center',
    },
});

export const MoreStoriesContent = ({ posts }: MoreStoriesContentType) => {
    const classes = useStyles();
    const [seeMoreButtonEnabled, setSeeMoreButtonEnabled] = useState<boolean>(true);
    const [getMorePosts, { loading, error, data, called }] = useGetMorePostsLazyQuery();
    const [morePosts, setMorePosts] = useState<PostsResponse>({ posts: [], cursors: posts.cursors });

    useEffect(() => {
        if (called && !loading && !error && data?.getMorePosts.posts) {
            setMorePosts({
                posts: [...(morePosts?.posts || []), ...data.getMorePosts.posts],
                cursors: data.getMorePosts.cursors,
            });

            const lastPost = data.getMorePosts.posts[data.getMorePosts.posts.length - 1];

            // TODO(karanhudia): Until better solution, hardcoded this to know when all posts have been fetched
            if (lastPost && lastPost.id === '17855896562131601') {
                setSeeMoreButtonEnabled(false);
            }
        }
    }, [loading]);

    const handleOnSeeMoreClick = () => {
        if (!morePosts.cursors.after) {
            return;
        }

        getMorePosts({ variables: { nextCursor: morePosts?.cursors.after } });
    };

    return (
        <>
            <GridList className={classes.gridList}>
                {posts.posts.map((post) => post !== null && <Post post={post} key={post.id} />)}
                {morePosts?.posts.map((morePost) => morePost !== null && <Post post={morePost} key={morePost.id} />)}
            </GridList>
            <Grid container item xs={12} justify="center">
                {loading ? (
                    <CircularProgress />
                ) : (
                    seeMoreButtonEnabled && (
                        <Button
                            size="small"
                            type="submit"
                            color="secondary"
                            variant="contained"
                            onClick={handleOnSeeMoreClick}
                        >
                            See More Stories
                        </Button>
                    )
                )}
            </Grid>
        </>
    );
};
