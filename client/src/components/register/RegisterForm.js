import React, { useState } from 'react';

export default function RegisterForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  function onChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    })
  }

  function onSubmit(event) {
    event.preventDefault();
    setCredentials({
      username: '',
      password: ''
    })
    console.log('credentials: ', credentials)
  }

  return (
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}