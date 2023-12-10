import './Content.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import BookInfo from '../pages/BookInfo';
import BookSearch from '../pages/BookSearch';
import AboutBooks from '../pages/AboutBooks';
import Main from '../pages/Main';

function Content() {
  return (
    <div id='content'>
      <Routes>
        <Route path='/aboutBooks' element={<AboutBooks />} />
        <Route path='/books' element={<BookSearch />} />
        <Route path='/books/:title/:id' element={<BookInfo />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default Content;
