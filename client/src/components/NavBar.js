import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowEvents, setShowStats, getDataList } from '../actions/index';

import Button from './Button';

import './NavBar.css';

export default function NavBar(props) {

  const dispatch = useDispatch();

  const handleDailyEvents = () => {
    dispatch(getDataList('/events/daily'));
    dispatch(setShowEvents());
  };

  const handleHourlyEvents = () => {
    dispatch(getDataList('/events/hourly'));
    dispatch(setShowEvents());
  };

  const handleDailyStats = () => {
    dispatch(getDataList('/stats/daily'));
    dispatch(setShowStats());
  };

  const handleHourlyStats = () => {
    dispatch(getDataList('/stats/hourly'));
    dispatch(setShowStats());
  };

  return (
    <header id='nav-bar'>
      <Button label='Daily Events' onClick={handleDailyEvents} />
      <Button label='Hourly Events' onClick={handleHourlyEvents} />
      <Button label='Daily Stats' onClick={handleDailyStats} />
      <Button label='Hourly Stats' onClick={handleHourlyStats} />
    </header>
  );
}