import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataList, filterDataList } from '../actions/index';

import Button from './Button';
import Slider from './Slider';
import Dropdown from './Dropdown';

export default function SearchBar() {

  const [ searchTerm, setSearchTerm ] = useState('');

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
      <Slider
        category='Impressions'
        min={0}
        max={300000}
        step={10000}
      />
      <Slider
        category='Clicks'
        min={0}
        max={2000}
        step={100}
      />
      <Slider
        category='Revenue'
        min={0}
        max={300}
        step={100}
      />
      <Slider
        category='Events'
        min={0}
        max={100}
        step={10}
      />
      <Dropdown />
    </>
  );
}