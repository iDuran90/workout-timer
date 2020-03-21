import React from 'react';
import NumberPicker from './Components/NumberPicker/NumberPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <NumberPicker title="Cycles" />
      <NumberPicker title="Sets" />
      <NumberPicker title="Exercises" />

      <NumberPicker title="Workout Time" />
      <NumberPicker title="Rest Time (Between Exercises)" />
    </div>
  );
}

export default App;
