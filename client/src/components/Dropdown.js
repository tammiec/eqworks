import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy, filterDataList } from '../actions/index';

import './Dropdown.css';

export default function Dropdown(props) {

  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);
  const sortBy = useSelector(state => state.sortBy);

  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setSortBy(event.target.value));
    dispatch(filterDataList());
  }

  return (
    <div className='dropdown'>
      <h6>{props.label}</h6>
      <select name='Sort By' value={sortBy} onChange={event => handleChange(event)} >
        <option disabled value='default'></option>
        {showStats && 
          <>
            <option value='impressions'>Impressions</option>
            <option value='clicks'>Clicks</option>
            <option value='revenue'>Revenue</option>
          </>
        }
        {showEvents && <option value='events'>Events</option>}
      </select>
    </div>
  );
}