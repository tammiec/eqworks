import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMinValue } from '../actions/index';

import './Slider.css';

export default function Slider(props) {

  const [min, setMin] = useState(props.min);

  const dispatch = useDispatch();

  const handleChange = event => {
    setMin(event.target.value);
    dispatch(setMinValue(props.type, event.target.value));
  };

  return (
    <div className='range-slider'>
      <h6>{props.type}</h6>
      <h6>Min: {min}</h6>
      <input 
        className='min-slider'
        type='range'
        min={props.min}
        max={props.max}
        defaultValue={min}
        onChange={event => handleChange(event)}
        step={props.step}
      />
    </div>
  );
}