import './BookSearch.css';
import React from 'react';
// Contexts
import { APIContext } from '../Contexts/APIContext';
import { SearchContext } from '../Contexts/SearchContext';
// Components
import Buttons from '../components/Buttons';
import Form from '../components/Form';
import SearchDisplay from '../components/BookSearchDisplay';
//Hooks
import { useContext, useEffect } from 'react';

function BookSearch() {
  window.scrollTo(0, 0);
  const apiKey = 'AIzaSyDuLCXY1RHG1ude7aVtiK1acROKuNeUlfs';
  const maxResults = 4;
  const pages = 10;
  const { books, setBooks } = useContext(APIContext);
  const { search, index, setIndex } = useContext(SearchContext);

  // Get results from api
  const getBooks = async (searchterm) => {
    if (searchterm) {
      window.scrollTo(0, 0);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}&startIndex=${index}&maxResults=${maxResults}`
        );
        const data = await response.json();
        setBooks(data);
        console.log('Searchterm: ', search, 'Index:', index);
      } catch (e) {
        console.error(e);
      }
    }
  };
  useEffect(() => {
    if (search) {
      console.log('Search on useEffect:', search);
      getBooks(search);
    }
    // eslint-disable-next-line
  }, [index]);

  const buttonActions = {
    decrement: function () {
      if (index >= maxResults) {
        setIndex(index - maxResults);
      }
    },
    increment: function () {
      if (search && (index + maxResults) / maxResults < pages) {
        setIndex(index + maxResults);
      }
    },
  };

  const position = {
    top: 0,
    bottom: 1,
  };

  return (
    <div id="book-search" className="page">
      <h2>Book Search</h2>
      <Form search={getBooks} setIndex={setIndex} index={index} />
      {search ? (
        <div>
          Page {(index + maxResults) / maxResults} of {pages}
          <Buttons action={buttonActions} position={position.top} />
        </div>
      ) : (
        ''
      )}
      <SearchDisplay searchterm={books} />
      {search ? (
        <div>
          <Buttons action={buttonActions} position={position.bottom} />
          Page {(index + maxResults) / maxResults} of {pages}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default BookSearch;
