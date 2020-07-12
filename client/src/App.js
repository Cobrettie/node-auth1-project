import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.js';
import RegisterForm from './components/register/RegisterForm.js';
import LoginForm from './components/login/LoginForm.js';
import UserList from './components/Users/UserList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path='/api/register'>
          <RegisterForm />
        </Route>
        <Route path='/api/login'>
          <LoginForm />
        </Route>
        <Route path='/api/users'>
          <UserList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
