import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../actions/index';

import './Dropdown.css';

export default function Dropdown(props) {

  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);

  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(sortBy(event.target.value));
  }

  return (
    <select name='Sort By' onChange={event => handleChange(event)} >
      <option value='date'>Date</option>
      {showStats && 
        <>
          <option value='impressions'>Impressions</option>
          <option value='clicks'>Clicks</option>
          <option value='revenue'>Revenue</option>
        </>
      }
      {showEvents && <option value='events'>Events</option>}
    </select>
  );
}