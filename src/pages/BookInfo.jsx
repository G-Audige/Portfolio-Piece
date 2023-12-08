import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookInfo() {
  window.scrollTo(0, 0);
  console.log('Book info page.');
  const params = useParams();
  const id = params.id;
  console.log(id);

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
      console.log('Current batch: ', book);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getBook(book);
    // eslint-disable-next-line
  }, []);
  const loaded = () => {
    console.log('Show book: ', book);
    const item = book;
    let image;
    console.log(item.volumeInfo.imageLinks);
    if (typeof item.volumeInfo.imageLinks == 'undefined') {
      image = 'NoImage.png';
    } else {
      image = item.volumeInfo.imageLinks.thumbnail;
    }
    return (
      <div id='book-info'>
        <h2>{item.volumeInfo.title}</h2>
        <img src={image} alt={item.volumeInfo.title} className='image' />
      </div>
    );
  };
  const loading = () => {
    return <div>Loading...</div>;
  };

  return book ? loaded() : loading();
}

export default BookInfo;
