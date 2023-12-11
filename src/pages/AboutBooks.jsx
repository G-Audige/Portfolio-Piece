import './AboutBooks.css';
import React from 'react';
import { Link } from 'react-router-dom';
// Models
import books from '../models/Books';

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
      <h2>
        <Link to='/books'>Get Started</Link>
      </h2>
      <div id='recommendations'>
        <h2>Where to start?</h2>
        <p>
          Here are some personal recommendations of books available, both of
          books that I am reading and of books that are well regarded.
        </p>
        <div id='books'>
          <div id='container'>
            {books.map((book) => {
              return (
                <div className='book'>
                  {/* {console.log(book)} */}
                  <img src={book.img}></img>
                  <Link to={`/books/${book.title}/${book.id}`}>
                    {book.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBooks;
