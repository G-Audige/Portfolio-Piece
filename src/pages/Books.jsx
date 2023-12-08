import React from 'react';
// Components
import Buttons from '../components/Buttons';
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
  const maxResults = 20;
  let prvBtn = document.querySelector('.previous-btn');

  const getBook = async (searchterm) => {
    window.scrollTo(0, 0);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&startIndex=${index}&maxResults=${maxResults}`
      );
      const data = await response.json();
      setSearch(searchterm);
      setBook(data);
      if (index > 0) {
        prvBtn.style.visibility = 'visible';
      } else {
        prvBtn.style.visibility = 'hidden';
      }
      console.log('Current batch: ', book);
      console.log(index);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (book) {
      getBook(book);
    }
    // eslint-disable-next-line
  }, [setBook, index]);
  const buttonActions = {
    decrement: function () {
      if (index >= maxResults) {
        setIndex(index - maxResults);
        getBook(search);
      }
    },
    increment: function () {
      setIndex(index + maxResults);
      getBook(search);
    },
  };

  return (
    <div id='books' className='page'>
      <h2>Book Search</h2>
      <Form search={getBook} />
      <SearchDisplay searchterm={book} />
      <Buttons action={buttonActions} />
    </div>
  );
}

export default Books;
