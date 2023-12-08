import React from 'react';
// Components
import Form from '../components/Form';
import SearchDisplay from '../components/BookSearchDisplay';

//Hooks
import { useEffect, useState } from 'react';

function Books() {
  const [book, setBook] = useState('');
  const apiKey = 'AIzaSyDuLCXY1RHG1ude7aVtiK1acROKuNeUlfs';

  const getBook = async (searchterm) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&maxResults=40`
      );
      const data = await response.json();
      setBook(data);
      console.log('Current batch: ', book);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (book) {
      getBook(book);
    }
    // eslint-disable-next-line
  }, [setBook]);

  return (
    <div className='books'>
      Books
      <Form search={getBook} />
      <SearchDisplay searchterm={book} />
    </div>
  );
}

export default Books;
