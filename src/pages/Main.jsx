import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PDFViewer from '../components/PDFViewer';

function Main() {
  window.scrollTo(0, 0);
  return (
    <div id='main'>
      <div id='intro'>
        <div id='intro-1'>
          <p>
            Hello, I'm Gloria, a full-stack developer creating apps for the web.
          </p>

          <img src='laptop.png' alt='At work' id='laptop' />
        </div>
      </div>
      <div>
        <p>Content talking about experience and background</p>
      </div>
      <div id='projects'>
        <h2>Portfolio</h2>
        <p>
          Here are some of my projects, so feel free to check them out. This
          list will be updated as I work on more applications.
        </p>
      </div>
      <Link to='/aboutBooks'>
        <p>Book About</p>
      </Link>
    </div>
  );
}

export default Main;
