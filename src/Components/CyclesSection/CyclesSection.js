import React from 'react';
import NumberPicker from '../NumberPicker/NumberPicker';
import './CyclesSection.css';

function CyclesSection({ cycle }) {
  return (
    <div className="CyclesSection">
      <NumberPicker title="Sets" sets={cycle.sets} />
      <NumberPicker title="Exercises" exercise={cycle.exercises} />
    </div>
  )
}
export default CyclesSection;
