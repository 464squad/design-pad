import React from 'react';
import './App.css';
import PadInput from './Components/PadInput';
import DesignBoard from './Components/DesignBoard';
import DesignPad from './Components/DesignPad';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <PadInput/>
       <DesignBoard />
       <DesignPad/>
      
      </div>
    </div>
  );
}

export default App;
