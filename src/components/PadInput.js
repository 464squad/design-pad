import React, {useState} from 'react'
import PadButton from './PadButton.js'
import '../style/PadInput.css'

// list of colors for rendering for each PadInput
const colors = ['red', 'orange', 'yellow', 'green', 'purple', 'grey', 'pink', 'white']

const PadInput = () => {
  const [editMode, setEdit] = useState(true)

  function isEdit() {
    if (editMode){
      setEdit(false)
    } else {
      setEdit(true)
    }
  }

  

  if (editMode){
    return (
       <div>
           <button onClick={isEdit} style={{width:"400px"}}>Edit Mode</button>
           <div className="PadInput-Container">
             
            <div className='PadInput' style={{ backgroundColor: 'blue'}}>
            <h1> Currently in edit mode </h1>
            {/* map over the list of colors and render them */}
            {colors.map((color) => (
            <PadButton bgColor={color}  editMode={true}/>
          ))}
        </div>
        
      </div>
       </div> 
      
    )
  } else{
    return (
      <div>
           <button onClick={isEdit} style={{width:"400px"}}>Edit Mode</button>
           <div className="PadInput-Container">
             
            <div className='PadInput' style={{ backgroundColor: 'grey' }}>
            <h1> Not in edit mode </h1>
        </div>
        
      </div>
       </div> 
    )
  }
} 
export default PadInput