import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='header'>
      <Link to='/'>
        <p>Main</p>
      </Link>
      <div className='dropdown-container'>
        Explore
        <Link to='/projects'>
          <p>Projects</p>
        </Link>
        {/* <Link to='/music'>
          <p>Music Search</p>
        </Link> */}
        <Link to='/books'>
          <p>Book Search</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
