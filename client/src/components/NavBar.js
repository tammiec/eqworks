import React from 'react';

import Button from './Button';

import './NavBar.css';

export default function NavBar(props) {
  return (
    <header id='nav-bar'>
      <Button label='Daily Events' />
      <Button label='Hourly Events' />
      <Button label='Daily Stats' />
      <Button label='Hourly Stats' />
    </header>
  );
}