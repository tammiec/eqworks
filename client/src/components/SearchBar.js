import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataList, filterDataList } from '../actions/index';

import Button from './Button';
import Slider from './Slider';
import Dropdown from './Dropdown';

export default function SearchBar() {

  const [ searchTerm, setSearchTerm ] = useState('');
  
  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);

  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(filterDataList(value));
  };

  const onReset = () => {
    dispatch(getDataList('/stats/hourly'));
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
      {showStats && 
        <>
          <Slider
            type='impressions'
            min={0}
            max={300000}
            step={10000}
          />
          <Slider
            type='clicks'
            min={0}
            max={2000}
            step={100}
          />
          <Slider
            type='revenue'
            min={0}
            max={300}
            step={100}
          />
        </>
      }
      {showEvents && <Slider
        type='events'
        min={0}
        max={100}
        step={10}
      />}
      <Dropdown />
    </>
  );
}