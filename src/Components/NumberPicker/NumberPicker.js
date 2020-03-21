import React from 'react';
import './NumberPicker.css';

function NumberPicker({ title }) {

  return (
    <div className="NumberPicker">
      <div className="Title">{title}</div>
      <div className="ButtonsContainer">
        <div>
        <button className="Button">+</button>
        </div>
        <div>
        <button className="Button">-</button>
        </div>
      </div>
    </div>
  );
}

export default NumberPicker;
