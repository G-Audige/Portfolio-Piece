import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import BookInfoPage from '../pages/BookInfoPage';
import BookSearchPage from '../pages/BookSearchPage';
import MainPage from '../pages/MainPage';

function Content() {
  return (
    <div id='content'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/books' element={<BookSearchPage />} />
        <Route path='/books/:title/:id' element={<BookInfoPage />} />
      </Routes>
    </div>
  );
}

export default Content;
