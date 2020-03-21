import React from 'react';
import CyclesPicker from './Components/CyclesPicker/CyclesPicker';
import NumberPicker from './Components/NumberPicker/NumberPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <CyclesPicker title="Cycles" />

      <NumberPicker title="Cycles" />
    </div>
  );
}

export default App;
