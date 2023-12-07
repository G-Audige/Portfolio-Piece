import React from 'react';

function SearchDisplay(props) {
  const loaded = () => {
    const items = props.searchterm.items;
    console.log('Loaded: ', items[0].volumeInfo.title);
    console.log('Loaded: ', items[0]);
    return (
      <div className='catalogue'>
        {items.map((item) => {
          console.log(item);
          let image;
          if (typeof item.volumeInfo.imageLinks == 'undefined') {
            image = 'NoImage.png';
          } else {
            image = item.volumeInfo.imageLinks.thumbnail;
          }
          return (
            <div className='book' key={item.id}>
              <img src={image} alt={item.volumeInfo.title} className='image' />
              <p>{item.volumeInfo.title}</p>
            </div>
          );
        })}
      </div>
    );
  };
  const loading = () => {
    console.log('Loading: ', props);
    // console.log('Prop: ', props.items[0].volumeInfo.title);
    return (
      <div className='catalogue'>
        <h1>Loading...</h1>
      </div>
    );
  };
  return props.searchterm ? loaded() : loading();
}

export default SearchDisplay;
