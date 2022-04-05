import React from 'react';
import "./posts.css"

const Post = ({post}) => {
    return (
        <div className={"postItem"}>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
