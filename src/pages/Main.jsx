import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div id='main'>
      <Link to='/aboutBooks'>
        <p>Book About</p>
      </Link>
      <Link to='/books'>
        <p>Book Search</p>
      </Link>
    </div>
  );
}

export default Main;
