import React from 'react';
import logo from './logo.svg';
import DesignPad from './components/DesignPad.js'
import PadInput from './components/PadInput.js'


function App() {
  return (
    <div className="App">
      <PadInput />
      <DesignPad />
    </div>
  );
}

export default App;
