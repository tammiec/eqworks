import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataList } from '../actions/index';
import { timeFormatter } from '../helpers/timeFormatter';

import './Table.css';

export default function Table() {

  const filteredDataByMin = useSelector(state => state.filteredDataByMin);
  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);
  const showHourly = useSelector(state => state.showHourly);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataList('/stats/hourly'));
  }, [dispatch]);
  
  const dataRows = filteredDataByMin.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date.slice(0, 10)}</td>
        {showHourly && <td>{timeFormatter(row.hour)}</td>}
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
    <table id='data-table'>
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