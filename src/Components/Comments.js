import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import "./comments.css"

const Comments = () => {
    const [comments, setComment] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
            .then(comment => setComment(comment));
    }, [])
    return (
        <div>
            <h1 className={"title"}>Comments</h1>
            <div className={"comments"}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;
