import React, { useState } from 'react';

import './Slider.css';

export default function Slider(props) {

  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  return (
    <div className='range-slider'>
      <p>{props.category}</p>
      <p>{min} - {max}</p>
      <input 
        className='min-slider'
        type='range'
        min={props.min}
        max={max}
        defaultValue={min}
        onChange={event => setMin(event.target.value)}
        step={10}
      />
      <input 
        className='max-slider'
        type='range'
        min={min}
        max={props.max}
        defaultValue={max}
        onChange={event => setMax(event.target.value)}
        step={10}
      />
    </div>
  );
}