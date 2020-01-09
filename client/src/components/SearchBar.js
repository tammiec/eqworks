import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHourlyStats, filterHourlyStats } from '../actions/index';

import Button from './Button';
import Slider from './Slider';

export default function SearchBar() {

  const [ searchTerm, setSearchTerm ] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(filterHourlyStats(value));
  };

  const onReset = () => {
    dispatch(getHourlyStats());
  };

  return (
    <>
      <input 
        placeholder='Search by location' 
        value={searchTerm}
        onChange={event => handleChange(event)}
      />
      <Button
        label='Reset'
        onClick={onReset}
      />
      <Slider
        category='Clicks'
        min={0}
        max={200}
      />
    </>
  );
}