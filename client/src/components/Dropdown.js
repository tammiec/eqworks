import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../actions/index';

export default function Dropdown(props) {

  const showEvents = useSelector(state => state.showEvents);

  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(sortBy(event.target.value));
  }

  return (
    <select name='Sort By' onChange={event => handleChange(event)} >
      <option value='date'>Date</option>
      {!showEvents && <option value='impressions'>Impressions</option>}
      {!showEvents && <option value='clicks'>Clicks</option>}
      {!showEvents && <option value='revenue'>Revenue</option>}
      {showEvents && <option value='events'>Events</option>}
    </select>
  );
}