import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  window.scrollTo(0, 0);
  return (
    <div id='main'>
      <div id='intro'></div>
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
