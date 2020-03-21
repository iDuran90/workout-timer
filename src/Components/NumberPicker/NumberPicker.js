import React from 'react';
import './NumberPicker.css';

function NumberPicker({ title }) {
  return (
    <div className="NumberPicker">
      <div >{title}</div>
      <div></div>
    </div>
  );
}

export default NumberPicker;
