import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import BookInfo from '../pages/BookInfo';
import Books from '../pages/Books';
import Main from '../pages/Main';
import Projects from '../pages/Projects';

function Content() {
  return (
    <div id='content'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:title/:id' element={<BookInfo />} />
      </Routes>
    </div>
  );
}

export default Content;
