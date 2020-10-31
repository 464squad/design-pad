import React from 'react';
import DesignPad from "./components/DesignPad";
import DesignContainer from "./components/DesignContainer"
import './App.css';
import PadInputContainer from './components/DesignPad';
import PadInput from './components/PadInput';

function App() {
  const tryingHello = () => {
    console.log("Hello");
  }
  return (
    <div className="App">
      
      <div className="pads">
      <span >{<DesignContainer />}</span>
      <span className="inputs">{<DesignPad />}</span>
      </div>
    </div>

  );
}

export default App;
