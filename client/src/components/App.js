import React from 'react';
import './App.css';

import SearchBar from './SearchBar';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <h1>Location Data</h1>
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
