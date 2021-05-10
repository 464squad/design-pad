import React from 'react';
import './App.css';
import EditButton from './components/editButton';
import Pad from './components/pad.jsx';

function App() {
  return (
    <div className="App">
        <EditButton />
        <div>
          <Pad />
        </div>
        
    </div>
  );
}

export default App;
