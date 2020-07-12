import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        console.log(response)
        setUsers(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='main-container'>
      <h2 className='main-heading'>Users</h2>
      <div className='userlist-container'>
        {users.map(user => {
          return (
            <div key={user.id} className='usercard'>
              <p>{user.username}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// left off here 1;28am o.O 
// removed restrict() middleware method for now,
// focus on jwt
// improve functionality, improve styling, move on to next lecture/project
