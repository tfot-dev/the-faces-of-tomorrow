import React from 'react';
import { GridList } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { PostSkeleton } from './PostSkeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    gridList: {
        justifyContent: 'center',
    },
});

export const MoreStoriesContainer = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllPostsQuery();

    let posts = Array(10).fill({});

    if (error) return <Error />;
    if (data?.posts) {
        posts = [...data.posts].slice(0, 24);
    }

    return (
        <GridList className={classes.gridList}>
            {posts.map((post, index) => {
                return loading ? <PostSkeleton key={index} /> : post !== null && <Post post={post} key={post.id} />;
            })}
            <Grid container item xs={12} justify="center">
                <div>
                    <Button size="small" type="submit" color="secondary" variant="contained">
                        See More Stories
                    </Button>
                </div>
            </Grid>
        </GridList>
    );
};
