import React, { useState }from 'react';
import CyclesPicker from './Components/CyclesPicker/CyclesPicker';
import CyclesSection from './Components/CyclesSection/CyclesSection';
import './App.css';

const CYCLE_TEMPLATE = {
  sets: 1,
  exercises: 1,
  useSameWorkRestTimes: false,
  times: [{
    workoutSec: 60,
    restSecs: 10
  }]
};

function App() {
  const [cycles, setCycles] = useState([CYCLE_TEMPLATE]);

  const addCycle = () => setCycles([...cycles, CYCLE_TEMPLATE]);
  const removeCycle = () => setCycles(cycles.slice(0, -1));

  return (
    <div className="App">
      <CyclesPicker cycles={cycles} addCycle={addCycle} removeCycle={removeCycle} />
      {cycles.map((cycle, index) => <CyclesSection cycle={cycle} key={index} />)}
    </div>
  );
}

export default App;
