import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DesignPad from './components/DesignPad/DesignPad';
// components
import DesignBoard from "./components/DesignBoard";

function App() {
  
  
  return (
    <div className="App">
      <DesignPad color={'gray'}/>
      <DesignBoard />
    </div>
  );
}

export default App;
