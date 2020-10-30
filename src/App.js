import React from 'react';
import DesignPad from './components/DesignPad';
import './App.css';

function App() {
  const tryingHello = () => {
    console.log("Hello");
  }
  return (
    <div className="App">
      <h1> Design Pad </h1>
      <button onClick={tryingHello}> Edit </button>
      <div>
        <DesignPad/>
      </div>
    </div>

  );
}

export default App;
