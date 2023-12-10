import './AboutBooks.css';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutBooks() {
  window.scrollTo(0, 0);
  return (
    <div id='about-books' className='page'>
      {/* <img id='book-background' src='' /> */}
      <div
        style={{ backgroundImage: 'url(BookBackground.jpg)' }}
        id='book-background'
      >
        <div id='welcome'>
          <h1>Google Book Search</h1>
          <div>
            <h2>Find more information on your favorite books here.</h2>
          </div>
        </div>
      </div>
      <Link to='/books'>
        <h2>Get Started</h2>
      </Link>
    </div>
  );
}

export default AboutBooks;
