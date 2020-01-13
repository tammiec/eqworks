import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataList } from '../actions/index';

import './Table.css';

export default function Table() {

  const filteredData = useSelector(state => state.filteredData);
  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);
  const showHourly = useSelector(state => state.showHourly);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataList('/stats/hourly'));
  }, [dispatch]);
  
  const dataRows = filteredData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date.slice(0, 10)}</td>
        {showHourly && <td>{row.hour}:00</td>}
        <td>{row.location}</td>
        {showStats && 
          <>
            <td>{parseInt(row.impressions).toLocaleString('en-US')}</td>
            <td>{parseInt(row.clicks).toLocaleString('en-US')}</td>
            <td>{parseFloat(row.revenue).toLocaleString('en-US', {style: 'currency', currency: 'CAD', minimumFractionDigits: 2})}</td>
          </>
        }
        {showEvents && <td>{row.events}</td>}
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          {showHourly && <th>Time</th>}
          <th>Location</th>
          {showStats && <th>Impressions</th>}
          {showStats && <th>Clicks</th>}
          {showStats && <th>Revenue</th>}
          {showEvents && <th>Events</th>}
        </tr>
      </thead>
      <tbody>
        {dataRows}
      </tbody>
    </table>
  );
}