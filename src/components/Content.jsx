import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import Books from '../pages/Books';
import Main from '../pages/Main';
import Music from '../pages/Music';
import Projects from '../pages/Projects';

function Content() {
  return (
    <div id='content'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/music' element={<Music />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  );
}

export default Content;
