import React from 'react';
import './css/App.css';
import DesignContainer from './components/DesignContainer';
import DesignBoard from './components/DesignBoard';

function App() {
  return (
    <div>
      <div class="app-header">
        <h1>DESIGN PAD</h1>
        <button id="editBtn">EDIT</button>
      </div>
      <div class="app-body">
        <DesignContainer/>
        <DesignBoard/>
      </div>
    </div>
  );
}

export default App;
