import React from 'react';
import { GridList } from '@material-ui/core';
import { useGetAllPostsQuery } from '../../generated/graphql';
import { Error } from '../Error/Error';

export const MoreStoriesContainer = () => {
    const { error, data } = useGetAllPostsQuery();

    let posts = Array(10).fill({});

    if (error) return <Error />;
    if (data?.posts) {
        posts = [...data.posts];
    }

    console.log(posts);

    return (
        <div>
            <GridList></GridList>
        </div>
    );
};
