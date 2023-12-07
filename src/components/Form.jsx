import React from 'react';
// Hooks
import { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // handleSubmit(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.searchterm) {
      props.search(formData.searchterm);
    } else {
      props.search(e);
    }
    console.log(formData);
  };

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='on'
          name='searchterm'
          onChange={handleChange}
          placeholder='Search...'
          type='text'
          value={formData.searchterm}
          className='searchbar'
        />
        <input type='submit' value='Search' className='searchButton' />
      </form>
    </div>
  );
}

export default Form;
