import React, {useState} from 'react';
import './App.css';
// components
import DesignBoard from "./components/DesignBoard";
import CHOICE from "./components/CHOICE";
import EDIT from './components/EDIT';
import PadInput from './components/PadInput/PadInput'

function App() {
  const [edit, setEdit]  = useState(false);

  const setEditMode = () => {
    setEdit(!edit) 
    //  ! means NOT , NOT {edit}
  }
  return (
    <div className="App">

      <DesignBoard />
      <EDIT editting ={setEditMode} edit={edit}  />
      <CHOICE />
      <PadInput/>
        </div>
  );
}












export default App;