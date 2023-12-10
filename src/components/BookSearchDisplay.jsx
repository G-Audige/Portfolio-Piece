import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Contexts
import { APIContext } from '../Contexts/APIContext';

function SearchDisplay(props) {
  const loaded = () => {
    const items = props.searchterm.items;
    if (typeof items == 'undefined') {
      loading();
    } else {
      return (
        <div className='search-display'>
          {items.map((item) => {
            let image;
            if (typeof item.volumeInfo.imageLinks == 'undefined') {
              image = 'NoImage.png';
            } else {
              image = item.volumeInfo.imageLinks.thumbnail;
            }
            return (
              <div className='book' key={item.id}>
                <Link to={`/Books/${item.volumeInfo.title}/${item.id}`}>
                  <img
                    src={image}
                    alt={item.volumeInfo.title}
                    className='image'
                  />
                  <p>{item.volumeInfo.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };
  const loading = () => {
    return (
      <div className='search-display'>
        <h1>Loading...</h1>
      </div>
    );
  };
  return typeof props.searchterm == 'undefined' ? loading() : loaded();
}

export default SearchDisplay;
