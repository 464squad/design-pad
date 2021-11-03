import React, {useState} from 'react';
import './App.css';
// components
import DesignBoard from "./components/DesignBoard";
import CHOICE from "./components/CHOICE";
import EDIT from './components/EDIT';
import PadInput from './components/PadInput/PadInput'

function App() {
  
  
  return (
    <div className="App">

      <DesignBoard />
      <EDIT />
      <CHOICE />
      <PadInput/>
        </div>
  );
}












export default App;