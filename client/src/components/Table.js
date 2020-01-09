import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHourlyStats } from '../actions/index';

export default function Table() {

  const filteredStats = useSelector(state => state.filteredStats);

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
        <td>{row.impressions.toLocaleString('en-US')}</td>
        <td>{row.clicks}</td>
        <td>{row.revenue.toLocaleString('en-US', {style: 'currency', currency: 'CAD', minimumFractionDigits: 2})}</td>
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
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {dataRows}
      </tbody>
    </table>
  );
}