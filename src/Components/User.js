import React from 'react';
import "./users.css"

const User = ({user}) => {
    return (
        <div className={"userItem"}>
            <h3>{user.id}. {user.name}</h3>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>

        </div>
    );
};

export default User;
