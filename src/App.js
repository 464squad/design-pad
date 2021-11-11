import React from 'react';
import { useState } from "react";
import DesignContainer from "./components/DesignContainer";
import './index.css';

function App() {
  // keep track of the dragged element
  const [currentDragged, setCurrentDragged] = useState(null);

  //state of button when clicked 
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <DesignContainer
        setEditMode={setEditMode}
        editMode={editMode}
        currentDragged={currentDragged}
        setCurrentDragged={setCurrentDragged}
      />
    </div>
  );
}

export default App;