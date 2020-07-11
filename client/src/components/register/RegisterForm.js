import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  function register(user) {
    axios.post('http://localhost:5000/api/register', user)
      .then(response => {
        console.log(response);
        setCredentials({
          username: '',
          password: ''
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  function onChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    })
  }

  function onSubmit(event) {
    event.preventDefault();
    register(credentials);
  }

  return (
    <div>
      <div>
        <h2>Register a user</h2>
      </div>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          name='username'
          onChange={onChange}
          value={credentials.username}
          placeholder='username'
        />
        <input 
          type='password'
          name='password'
          onChange={onChange}
          value={credentials.password}
          placeholder='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}