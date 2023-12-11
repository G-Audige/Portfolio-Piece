import './BookInfo.css';
import React from 'react';
import { useParams } from 'react-router-dom';
// Hooks
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
    console.log(item);
    if (typeof item.volumeInfo.imageLinks === 'undefined') {
      image = 'NoImage.png';
    } else {
      image = item.volumeInfo.imageLinks.thumbnail;
    }
    const tagRegExp = new RegExp('<s*[^>]*>', 'g');
    let desc;
    if (item.volumeInfo.description) {
      desc = item.volumeInfo.description;
      desc = desc.replace(tagRegExp, '');
    }
    return (
      <div id='book-container'>
        <div id='book-info' className='page'>
          <h2>{item.volumeInfo.title}</h2>
          {item.volumeInfo.subtitle ? <h3>{item.volumeInfo.subtitle}</h3> : ''}
          <div id='info-box'>
            <div id='info-box-left'>
              <img src={image} alt={item.volumeInfo.title} className='image' />
            </div>
            <div id='info-box-right'>
              <div>
                <span>Author:</span> {item.volumeInfo.authors}
              </div>
              <div>
                <span>Publisher:</span> {item.volumeInfo.publisher}
              </div>
              <div>
                <span>Published Date:</span> {item.volumeInfo.publishedDate}
              </div>
              <div>
                <span>Page Count:</span> {item.volumeInfo.pageCount}
              </div>
            </div>
          </div>
          <div id='description'>
            <h4>Description</h4>
            {item.volumeInfo.description ? (
              <p>{desc}</p>
            ) : (
              <p>No description available.</p>
            )}
          </div>
          <div id='sale-info'>
            <h3>
              Sale Status:{' '}
              {item.saleInfo.saleability === 'FOR_SALE' ? (
                <span>For sale</span>
              ) : (
                <span>Not for sale</span>
              )}
            </h3>
            {item.saleInfo.buyLink ? (
              <a href={item.saleInfo.buyLink} className='purchase-link'>
                Buy
              </a>
            ) : (
              ''
            )}
            <h3>
              E-book Status:{' '}
              {item.saleInfo.isEbook ? (
                <span>Available</span>
              ) : (
                <span>Not available</span>
              )}
            </h3>
            {item.volumeInfo.previewLink ? (
              <a href={item.volumeInfo.previewLink} className='purchase-link'>
                Preview
              </a>
            ) : (
              ''
            )}
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
