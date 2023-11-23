import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlavanoidsStatsTable from './components/FlavanoidsStatsTable';
import GammaStatsTable from './components/GammaStatsTable';

function App() {
  return (
    <div className="App">
      <FlavanoidsStatsTable />
      <GammaStatsTable />
    </div>
  );
}

export default App;
