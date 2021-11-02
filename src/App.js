import React from 'react';

import './App.css'
import PadInput from './components/PadInput'
import DesignPad from './components/DesignPad';
import DesignBoard from './components/DesignBoard';



function App() {
  return (
    <div className="App">
      
      <h1>Design Pad</h1>
        <PadInput />
        <DesignBoard/>

     
      
    </div>
  );
}

export default App;
