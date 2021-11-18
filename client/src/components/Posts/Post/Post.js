import React from "react";

import useStyles from '../Post/style';

const Post = () => {
    const classes = useStyles();
    return (
        <h1 className={classes}>POST</h1>
    );
}

export default Post;