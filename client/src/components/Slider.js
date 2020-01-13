import React, { useState } from 'react';

import './Slider.css';

export default function Slider(props) {

  const [min, setMin] = useState(props.min);

  return (
    <div className='range-slider'>
      <p>{props.category}</p>
      <p>Minimum: {min}</p>
      <input 
        className='min-slider'
        type='range'
        min={props.min}
        max={props.max}
        defaultValue={min}
        onChange={event => setMin(event.target.value)}
        step={props.step}
      />
    </div>
  );
}