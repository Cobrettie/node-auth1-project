import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/api/register'>register</Link></li>
          <li><Link to='/api/login'>log in</Link></li>
          <li><Link to='/api/users'>users</Link></li>
        </ul>
      </nav>
    </div>
  )
}