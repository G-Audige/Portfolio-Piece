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
          <h1>
            Hello, I'm Gloria, a full-stack developer creating apps for the web.
          </h1>

          <img src='laptop.png' alt='At work' id='laptop' />
        </div>
      </div>
      <div id='experience'>
        <h2>About Me</h2>
        <p>
          I'm a developer based in New Jersey who is aiming to take my skills to
          freelancing. Currently, I mainly work in HTML, JavaScript, CSS, and
          React, but I also have experience with C++, C#, and SQL. If you are
          interested in my experience, you can read about it on my{' '}
          <span id='resume'>
            <Link to='/resume' target='_blank'>
              resume
            </Link>
          </span>
          .
        </p>
      </div>
      <div id='portfolio'>
        <h2>Projects</h2>
        <p>
          Here are some of my projects, so feel free to check them out. This
          list will be updated as I work on more applications.
        </p>
        <div id='projects'>
          <div className='project'>
            <a href='https://g-audige.github.io/Stockpile/'>
              <img src='Stockpile.png' />
            </a>
            <a href='https://github.com/G-Audige/Stockpile'>
              <p>Stockpile</p>
            </a>
          </div>
          <div className='project'>
            <Link to='/aboutBooks'>
              <img src='Search.png' />
              <p>Google Book Search</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
