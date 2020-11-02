import React from 'react';
import './App.css';
import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad'
import EditBtn from './components/EditBtn'
import { Container, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="container">  
    <div className="row justify-content-md-center">
      <PadInput />
      <DesignPad />
      </div>
      <EditBtn />
    </div>
  );
}

export default App;
