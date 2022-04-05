import React, {useEffect, useState} from 'react';
import Post from "./Post";
import "./posts.css"

const Posts = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(post => setPost(post));
    }, [])
    return (
        <div>
            <h1 className={"title"}>Posts</h1>
            <div className={"posts"}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Posts;
