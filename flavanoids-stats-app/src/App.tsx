import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FlavanoidsStatsTable from "./components/FlavanoidsStatsTable";
import GammaStatsTable from "./components/GammaStatsTable";

function App() {
  return (
    <div className="App">
      <h1>Flavanoids</h1>
      <FlavanoidsStatsTable />
      <br />
      <h1>Gamma</h1>
      <GammaStatsTable />
    </div>
  );
}

export default App;
