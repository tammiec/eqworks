import React from 'react';

import { useDispatch } from 'react-redux';
import { setShowEvents, setShowStats, getDataList, setShowHourly, reset } from '../actions/index';

import Button from './Button';
import logo from './eqworks-white.png';

import './NavBar.css';

export default function NavBar(props) {

  const dispatch = useDispatch();

  const handleDailyEvents = () => {
    dispatch(getDataList('/events/daily'));
    dispatch(setShowEvents());
    dispatch(setShowHourly(false));
    dispatch(reset());
  };

  const handleHourlyEvents = () => {
    dispatch(getDataList('/events/hourly'));
    dispatch(setShowEvents());
    dispatch(setShowHourly(true));
    dispatch(reset());
  };

  const handleDailyStats = () => {
    dispatch(getDataList('/stats/daily'));
    dispatch(setShowStats());
    dispatch(setShowHourly(false));
    dispatch(reset());
  };

  const handleHourlyStats = () => {
    dispatch(getDataList('/stats/hourly'));
    dispatch(setShowStats());
    dispatch(setShowHourly(true));
    dispatch(reset());
  };

  return (
    <header>
      <img src={logo} alt='EQ Works logo' />
      <div id='nav-bar'>
        <Button label='Daily Events' onClick={handleDailyEvents} />
        <Button label='Hourly Events' onClick={handleHourlyEvents} />
        <Button label='Daily Stats' onClick={handleDailyStats} />
        <Button label='Hourly Stats' onClick={handleHourlyStats} />
      </div>
    </header>
  );
}