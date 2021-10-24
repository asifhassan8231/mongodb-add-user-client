import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure about that?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
        }
        else {
            return;
        }
    }
    return (
        <div>
            <ol>
                {
                    users.map(user => <li key={user._id}>
                        {user.name}---{user.email}--<Link to={`/users/${user._id}`}><button>Update</button></Link>-<button onClick={() => handleDelete(user._id)}>X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Users;