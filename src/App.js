import React from 'react';
import logo from './logo.svg';
import './App.css';
import DesignContainer from './components/DesignContainer/DesignContainer'


function App() {
  return (
    <div className="App">
      <header>

       <title>Design Pad</title>
      </header>


    {/*

      Design Container (includes DesignBoard,DesignPad,PadInput)
    */}

   <div className="_designContainer" >


          <DesignContainer></DesignContainer>
   </div>

    </div>
  );
}

export default App;
