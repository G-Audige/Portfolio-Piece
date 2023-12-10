import React from 'react';
// Components
import Form from '../components/Form';
import SearchDisplay from '../components/BookSearchDisplay';

//Hooks
import { useEffect, useState } from 'react';

function Books() {
  window.scrollTo(0, 0);
  const [search, setSearch] = useState('');
  const [book, setBook] = useState('');
  const [index, setIndex] = useState(0);
  const apiKey = 'AIzaSyDuLCXY1RHG1ude7aVtiK1acROKuNeUlfs';
  const maxResults = 4;
  const pages = 10;

  // Get results from api
  const getBook = async (searchterm) => {
    if (searchterm) {
      window.scrollTo(0, 0);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&startIndex=${index}&maxResults=${maxResults}`
        );
        const data = await response.json();
        setSearch(searchterm);
        setBook(data);
        console.log(index);
      } catch (e) {
        console.error(e);
      }
    }
  };
  useEffect(() => {
    if (search) {
      getBook(search);
    }
    // eslint-disable-next-line
  }, [index]);

  const buttonActions = {
    decrement: function () {
      if (index >= maxResults) {
        setIndex(index - maxResults);
        // console.log('Decrement to', index);
      }
    },
    increment: function () {
      if (search && (index + maxResults) / maxResults < pages) {
        setIndex(index + maxResults);
        // console.log('Increment to', index);
      }
    },
  };

  return (
    <div id='books' className='page'>
      <h2>Book Search</h2>
      <Form search={getBook} setIndex={setIndex} index={index} />
      {book != '' ? (
        <div>
          Page {(index + maxResults) / maxResults} of {pages}
          <div className='buttons' id='upper-buttons'>
            <button onClick={buttonActions.decrement} id='top-previous-btn'>
              Previous
            </button>
            <button onClick={buttonActions.increment} id='top-next-btn'>
              Next
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      <SearchDisplay searchterm={book} />
      {book != '' ? (
        <div>
          <div className='buttons' id='lower-buttons'>
            <button onClick={buttonActions.decrement} id='bottom-previous-btn'>
              Previous
            </button>

            <button onClick={buttonActions.increment} id='bottom-next-btn'>
              Next
            </button>
          </div>
          Page {(index + maxResults) / maxResults} of {pages}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Books;
