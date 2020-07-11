import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div>
      <nav>
        <ul>
          <Link to='/api/register'>register</Link>
          <Link to='/api/login'>log in</Link>
          <Link to='/api/users'>users</Link>
        </ul>
      </nav>
    </div>
  )
}