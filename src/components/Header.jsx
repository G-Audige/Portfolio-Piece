import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
      <Link to="/">Main</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Header;
