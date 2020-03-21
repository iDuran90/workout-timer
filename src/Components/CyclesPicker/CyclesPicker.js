import React from 'react';
import Button from '@material-ui/core/Button'
import './CyclesPicker.css';

function CyclesPicker({ cycles, addCycle, removeCycle }) {
  return (
    <div className="CyclesPicker">
      <div className="CyclesPickerButton">
        <Button className="Button" variant="contained" color="primary" onClick={addCycle}>
          Add Cycle
        </Button>
      </div>
      <div className="CyclesPickerButton">
        <Button
          variant="contained"
          color="secondary"
          onClick={removeCycle}
          disabled={cycles.length === 1}
        >
          Remove Cycle
        </Button>
      </div>
    </div>
  );
}

export default CyclesPicker;
