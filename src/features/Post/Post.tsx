import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const Posts = gql`
    query GetAllPosts {
        posts {
            id
            caption
            mediaUrl
            timestamp
        }
    }
`;

interface IPost {
    id: string;
    caption: string;
    mediaUrl: string;
    timestamp: string;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const Post: React.FC = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(Posts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return data.posts.map((post: IPost) => (
        <Card className={classes.root} key={post.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={post.mediaUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    {/*<Typography gutterBottom variant="h5" component="h2">*/}
                    {/*    {post.caption}*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.caption}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Share*/}
            {/*    </Button>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Learn More*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
    ));
};
