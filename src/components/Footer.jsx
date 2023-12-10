import './Footer.css';
import React from 'react';

function Footer() {
  const linkedin = '';
  return (
    <div id='footer'>
      <div className='links'>
        <a href='https://www.linkedin.com/in/gloria-audige'>
          <img src='linkedin.png' />
        </a>
        <a href='https://github.com/G-Audige'>
          <img src='github.png'></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
