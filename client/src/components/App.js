import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import SearchBar from './SearchBar';
import Table from './Table';
import NavBar from './NavBar';
import Error from './Error';

function App() {

  const error = useSelector(state => state.error);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      {error.bool ? <Error message={error.message} /> : <Table />}
    </div>
  );
}

export default App;
