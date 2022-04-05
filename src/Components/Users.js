import React, {useEffect, useState} from 'react';
import User from "./User";
import "./users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(user => setUsers(user))
    }, [])
    return (
        <div>
            <h1 className={"title"}>Users</h1>
            <div className={"users"}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Users;
