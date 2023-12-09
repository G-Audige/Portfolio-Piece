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
  const pages = 10;
  let prvBtn = document.querySelector('.previous-btn');

  const getBook = async (searchterm) => {
    console.log(searchterm);
    let displayedBooks = [];
    for (let i = 0; i < pages * maxResults; i += maxResults) {
      if (searchterm) {
        window.scrollTo(0, 0);
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&startIndex=${index}&maxResults=${maxResults}`
          );
          const data = await response.json();
          setSearch(searchterm);
          setBook(data);
          displayedBooks.push(data);
          console.log('Searchterm', searchterm);
          // console.log('Current batch: ', book);
        } catch (e) {
          console.error(e);
        }
      }
      console.log(i);
    }
    console.log(displayedBooks);
  };
  useEffect(() => {
    if (book) {
      getBook(book);
    }
    // eslint-disable-next-line
  }, [setSearch]);
  const buttonActions = {
    decrement: function () {
      if (index >= maxResults) {
        setIndex(index - maxResults);
        getBook(search);
        console.log(index);
      }
      if (index > 0) {
        prvBtn.style.visibility = 'visible';
      } else {
        prvBtn.style.visibility = 'hidden';
      }
    },
    increment: function () {
      if (search) {
        setIndex(index + maxResults);
        getBook(search);
        console.log(index);
        if (index > 0) {
          prvBtn.style.visibility = 'visible';
        } else {
          prvBtn.style.visibility = 'hidden';
        }
      }
    },
  };

  return (
    <div id='books' className='page'>
      <h2>Book Search</h2>
      <Form search={getBook} />
      Page {(index + maxResults) / maxResults} of {pages}
      <Buttons action={buttonActions} />
      <SearchDisplay searchterm={book} />
      <Buttons action={buttonActions} />
      Page {(index + maxResults) / maxResults} of {pages}
    </div>
  );
}

export default Books;
