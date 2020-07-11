import React from 'react';
import NavMenu from './components/NavMenu/NavMenu.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <h1>Users Application</h1>
        <h2>Register, log in, and view all users</h2>
      </header>
    </div>
  );
}

export default App;
