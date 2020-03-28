import React from "react";
import "./App.css";
import DesignBoard from "./components/DesignBoard";
import PadInput from "./components/PadInput";

function App() {
  return (
    <div className="App">
      <PadInput />
      <DesignBoard />
    </div>
  );
}

export default App;
