import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMinValue, filterDataList } from '../actions/index';

import './Slider.css';

export default function Slider(props) {

  const min = useSelector(state => state.minValues[props.type]);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setMinValue(props.type, event.target.value));
    dispatch(filterDataList());
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
        value={min}
        onChange={event => handleChange(event)}
        step={props.step}
      />
    </div>
  );
}