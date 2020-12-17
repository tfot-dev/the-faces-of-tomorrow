import React from 'react';
import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.shades[300],
            padding: '20px 0',
        },
    }),
);

export const Mission = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center" color="textPrimary">
                What we do?
            </Typography>
            <Box display="flex" justifyContent="space-evenly" margin={5}>
                <Typography variant="body1" align="center" color="textPrimary">
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                </Typography>
            </Box>
        </Box>
    );
};
