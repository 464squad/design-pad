import React from 'react';

import './App.css'
import PadInput from './components/PadInput'
import DesignBoard from './components/DesignBoard';



function App() {
  return (
    <div className="App">
      <h1>DESIGN PAD</h1>
       <div> <PadInput /></div>
        <div><DesignBoard/></div>

     
      
    </div>
  );
}

export default App;
