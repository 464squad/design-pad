import React, {useState} from 'react';
import './App.css';
// components
import DesignBoard from "./components/DesignBoard";
import CHOICE from "./components/CHOICE";
import EDIT from './components/EDIT';
import PadInput from './components/PadInput/PadInput'

function App() {
  const [edit, setEdit]  = useState(false);

  const [colors, setColors] = useState({ 0:'gray', 1:'gray', 2:'gray',3: 'gray',});

  const P4dInput = (col) => {
    //setColors({...colors.: col})
    console.log(col)
  }


  const setEditMode = () => {
    setEdit(!edit) 
    //  ! means NOT , NOT {edit}
  }
  return (
    <div className="App">

      <DesignBoard colors={colors}/>
      <EDIT editting ={setEditMode} edit={edit}  />
      <CHOICE />
      <PadInput Padding={edit} Drag={P4dInput}/>
        </div>
  );
}












export default App;