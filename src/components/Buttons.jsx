import React from 'react';

function Buttons(props) {
  return (
    <div id='buttons'>
      <button onClick={props.action.decrement} className='previous-btn'>
        Previous
      </button>
      <button onClick={props.action.increment} className='next-btn'>
        Next
      </button>
    </div>
  );
}

export default Buttons;
