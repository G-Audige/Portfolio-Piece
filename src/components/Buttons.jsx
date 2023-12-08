import React from 'react';

function Buttons(props) {
  return (
    <div id='buttons'>
      <button onClick={props.action.decrement}>Previous</button>
      <button onClick={props.action.increment}>Next</button>
    </div>
  );
}

export default Buttons;
