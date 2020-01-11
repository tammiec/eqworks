import React from 'react';
import './App.css';

import SearchBar from './SearchBar';
import Table from './Table';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
