import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookInfo() {
  window.scrollTo(0, 0);
  console.log('Book info page.');
  const params = useParams();
  const id = params.id;

  const [book, setBook] = useState('');
  const options = {
    method: 'GET',
  };
  const getBook = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`,
        options
      );
      const data = await response.json();
      setBook(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getBook(book);
    // eslint-disable-next-line
  }, []);
  const loaded = () => {
    const item = book;
    let image;
    console.log(item.volumeInfo.imageLinks);
    if (typeof item.volumeInfo.imageLinks == 'undefined') {
      image = 'NoImage.png';
    } else {
      image = item.volumeInfo.imageLinks.thumbnail;
    }
    return (
      <div id='book-container'>
        <div id='book-info' className='page'>
          <h2>{item.volumeInfo.title}</h2>
          <div className='info-box'>
            <div id='info-box-left'>
              <img src={image} alt={item.volumeInfo.title} className='image' />
            </div>

            <div id='info-box-right'>
              <div>Author: {item.volumeInfo.authors}</div>
              <div>Publisher: {item.volumeInfo.publisher}</div>
              <div>Published Date: {item.volumeInfo.publishedDate}</div>
              <div>Page Count: {item.volumeInfo.pageCount}</div>
            </div>
          </div>
          <div id='description'>
            <div>Description</div>
            <div>{item.volumeInfo.description}</div>
          </div>
        </div>
      </div>
    );
  };
  const loading = () => {
    return <div>Loading...</div>;
  };

  return book ? loaded() : loading();
}

export default BookInfo;
