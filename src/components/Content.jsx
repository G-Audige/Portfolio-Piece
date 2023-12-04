import React from 'react'
// eslint-disable-next-line
import { Route, Routes } from 'react-router-dom';
//
import Main from '../pages/Main';
import Projects from '../pages/Projects';

function Content() {
  return (
    <div className='content'>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default Content