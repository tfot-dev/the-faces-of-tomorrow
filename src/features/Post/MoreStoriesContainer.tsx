import React from 'react';
import { GridList } from '@material-ui/core';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { PostSkeleton } from './PostSkeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Error } from '../Error/Error';
import { MoreStoriesContent } from './MoreStoriesContent';

const useStyles = makeStyles({
    gridList: {
        justifyContent: 'center',
    },
});

export const MoreStoriesContainer = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllPostsQuery();

    if (error) return <Error />;

    return loading || !data?.posts ? (
        <GridList className={classes.gridList}>
            {[...Array(12)].map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </GridList>
    ) : (
        <MoreStoriesContent posts={data?.posts} />
    );
};
