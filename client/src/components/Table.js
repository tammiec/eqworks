import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHourlyStats } from '../actions/index';

export default function Table() {

  const filteredStats = useSelector(state => state.filteredStats);
  const showEvents = useSelector(state => state.showEvents);
  const showStats = useSelector(state => state.showStats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHourlyStats());
  }, [dispatch]);
  
  const dataRows = filteredStats.map((row, index) => {
    // console.log('row', row);
    return (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.time}</td>
        <td>{row.location}</td>
        {showStats && <td>{row.impressions.toLocaleString('en-US')}</td>}
        {showStats && <td>{row.clicks}</td>}
        {showStats && <td>{row.revenue.toLocaleString('en-US', {style: 'currency', currency: 'CAD', minimumFractionDigits: 2})}</td>}
        {showEvents && <td>{row.events}</td>}
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
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