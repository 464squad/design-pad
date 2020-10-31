import React from 'react';
import DesignPad from "./components/DesignPad";
import DesignContainer from "./components/DesignContainer"
import './App.css';

function App() {
  const tryingHello = () => {
    console.log("Hello");
  }
  return (
    <div className="App">
      <h1> Design Pad </h1>
  
      <div className="pads">
      <span>{<DesignContainer />}</span>
      </div>
    </div>

  );
}

export default App;
