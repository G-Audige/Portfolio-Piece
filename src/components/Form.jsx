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
    props.search(formData.searchterm);
    console.log(formData);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='on'
          name='searchterm'
          onChange={handleChange}
          placeholder='Search...'
          type='text'
          value={formData.searchterm}
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
}

export default Form;
