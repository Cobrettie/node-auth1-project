import React from 'react';
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.js';
import RegisterForm from './components/register/RegisterForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />

      <Route exact path='/api/register' component={RegisterForm} />
    </div>
  );
}

export default App;
