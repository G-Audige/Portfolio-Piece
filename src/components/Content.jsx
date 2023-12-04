import React from 'react'
import { Route, Routes } from 'react-router-dom';
// Pages
import Main from '../pages/Main';
import Projects from '../pages/Projects';

function Content() {
  return (
    <div id='content'>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default Content