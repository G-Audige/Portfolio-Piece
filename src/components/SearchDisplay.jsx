import React from 'react';

function SearchDisplay(props) {
  const loaded = () => {
    const items = props.searchterm.items;
    console.log('Loaded: ', items[0].volumeInfo.title);
    return (
      <div className='catalogue'>
        {items.map((item) => {
          return (
            <div>
              <img src={item.volumeInfo.imageLinks.thumbnail} />
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
    return <h1>Loading...</h1>;
  };
  return props.searchterm ? loaded() : loading();
}

export default SearchDisplay;
