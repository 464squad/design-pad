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

      <DesignBoard />
      <EDIT editting ={setEditMode} edit={edit}  />
      <CHOICE />
      <PadInput Padding={edit} />
        </div>
  );
}












export default App;