import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowEvents, setShowStats } from '../actions/index';

import Button from './Button';

import './NavBar.css';

export default function NavBar(props) {

  const dispatch = useDispatch();

  const handleDailyEvents = () => {
    dispatch(setShowEvents());
  };

  const handleHourlyEvents = () => {
    dispatch(setShowEvents());
  };

  const handleDailyStats = () => {
    dispatch(setShowStats());
  };

  const handleHourlyStats = () => {
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