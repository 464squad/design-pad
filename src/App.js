
import './App.css';
import EDIT from './components/EDIT.js';
import CHOICE from './components/CHOICE.js';

import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad/DesignPad.js';
import React, {useState} from 'react';
import './App.css';
// components
import DesignBoard from "./components/DesignBoard";

function App() {
  
  
  return (
    <div className="App">


      
      <header className="App-header">
      <h1 className="h1">DESIGN PAD</h1>
      

      <EDIT />
      <CHOICE />
      <DesignPad />
      <DesignBoard />
      <PadInput />
        
        
        
        



        
      </header>
    </div>
  );
}












export default App;
