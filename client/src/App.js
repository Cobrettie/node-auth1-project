import React from 'react';
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.js';
import RegisterForm from './components/register/RegisterForm.js';
import LoginForm from './components/login/LoginForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />

      <Route exact path='/api/register' component={RegisterForm} />
      <Route exact path='/api/login' component={LoginForm} />
    </div>
  );
}

export default App;
