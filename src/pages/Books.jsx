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
  const maxResults = 4;

  const getBook = async (searchterm) => {
    window.scrollTo(0, 0);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&startIndex=${index}&maxResults=${maxResults}`
      );
      const data = await response.json();
      setSearch(searchterm);
      setBook(data);
      console.log('Current batch: ', book);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (book) {
      getBook(book);
      console.log(book.totalItems);
    }
    // eslint-disable-next-line
  }, [setBook, index]);
  const buttonActions = {
    decrement: function () {
      if (index >= maxResults) {
        setIndex(index - maxResults);
      }
      getBook(search);
      console.log(index);
    },
    increment: function () {
      setIndex(index + maxResults);
      getBook(search);
      console.log('index: ', index);
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
