import React from 'react';
import "./comments.css"

const Comment = ({comment}) => {
    return (
        <div className={"commentItem"}>
            <h4>{comment.id}. {comment.name}</h4>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;
