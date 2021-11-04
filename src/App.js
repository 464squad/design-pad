import React, {useState} from 'react';
import './App.css';
// components
import DesignBoard from "./components/DesignBoard";
import CHOICE from "./components/CHOICE";
import EDIT from './components/EDIT';
import PadInput from './components/PadInput/PadInput'

function App() {
  const [edit, setEdit]  = useState(true);

  const setEditMode = () => {
    setEdit(!edit) 
  }

  return (
    <div className="App">
      <h1>DESIGN PAD</h1>
      <DesignBoard />
      <EDIT editting ={setEditMode} edit={edit}  />
      
      <div className ="options">
        <CHOICE >
          <PadInput Padding={edit} />
        </CHOICE>
      </div>
    </div>
  );
}












export default App;