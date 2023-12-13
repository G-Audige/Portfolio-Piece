import React from 'react';
import { Link } from 'react-router-dom';
// Contexts
import { APIContext } from '../Contexts/APIContext';
import { SearchContext } from '../Contexts/SearchContext';
// Hooks
import { useContext } from 'react';

function SearchDisplay() {
  const { books } = useContext(APIContext);
  const {search, index} = useContext(SearchContext)
  const loaded = () => {
    console.log (books.items)
    const items = books.items;
    if (typeof items == 'undefined') {
      loading();
    } else {
      return (
        <div className='books'>
          {items.map((item) => {
            let image;
            if (typeof item.volumeInfo.imageLinks === 'undefined') {
              image = 'NoImage.png';
            } else {
              image = item.volumeInfo.imageLinks.thumbnail;
            }
            return (
              <div className='book-container'>
                <div className='book' key={item.id}>
                  <Link to={`/Books/${item.volumeInfo.title}/${item.id}`}>
                    <img
                      src={image}
                      alt={item.volumeInfo.title}
                      className='image'
                    />
                    <p>{item.volumeInfo.title}</p>
                  </Link>
                  <p>{item.volumeInfo.authors}</p>
                </div>
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
        {index === 0? <h1>Loading...</h1>: ''}
      </div>
    );
  };
  return search ? loaded() : loading();
}

export default SearchDisplay;
