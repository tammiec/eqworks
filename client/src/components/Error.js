import React from 'react';

import './Error.css';

export default function Error(props) {

  return (
    <h3 className='error-message'>{props.message}</h3>
  );
}