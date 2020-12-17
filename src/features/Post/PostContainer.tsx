import React from 'react';
import { createStyles, GridList, LinearProgress } from '@material-ui/core';
import { Post } from './Post';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        gridList: {
            flexWrap: 'nowrap',
            padding: 20,
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
    }),
);

export const PostContainer: React.FC = () => {
    const classes = useStyles();
    const { loading, error, data } = useGetAllPostsQuery();

    if (loading) return <LinearProgress color="secondary" />;
    if (error) return <Error />;
    if (!data?.posts) {
        return null;
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} spacing={6}>
                {data.posts.map((post) => {
                    return post !== null && <Post post={post} key={post.id} />;
                })}
            </GridList>
        </div>
    );
};
