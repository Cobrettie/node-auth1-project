import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    await axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.map(user => {
          return <p key={user.id}>{user.username}</p>
        })}
      </div>
    </div>
  )
}