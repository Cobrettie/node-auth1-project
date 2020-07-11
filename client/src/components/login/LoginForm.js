import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  function logIn(credentials) {
    axios.post('http://localhost:5000/api/login', credentials)
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
      [event.target.name]: event.target.value
    })
  }

  function onSubmit(event) {
    event.preventDefault();
    logIn(credentials);
    console.log(credentials);
  }

  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>
      <div>
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
          <button type='submit'>Log In</button>
        </form>
      </div>
    </div>
  )
}