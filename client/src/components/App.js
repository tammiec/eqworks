import React from 'react';

import { useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import Table from './Table';
import NavBar from './NavBar';
import Error from './Error';

import './App.css';

function App() {

  const error = useSelector(state => state.error);

  return (
    <>
      <NavBar />
      <div id="app-container">
        <SearchBar />
        {error.bool ? <Error message={error.message} /> : <Table />}
      </div>
    </>
  );
}

export default App;
