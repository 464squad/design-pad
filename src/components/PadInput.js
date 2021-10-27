import React, {useState} from 'react'
import PadButton from './PadButton.js'
import '../style/PadInput.css'

// list of colors for rendering
const colors = ['red', 'orange', 'yellow', 'green', 'purple', 'grey']

const PadInput = () => {
  const [edit, setEdit] = useState(true)

  function isEdit() {
    if (edit){
      setEdit(false)
    } else {
      setEdit(true)
    }
  }

  if (edit){
    return (
       <div>
           <button onClick={isEdit} style={{width:"400px"}}>Edit Mode</button>
           <div className="PadInput-Container">
            <div className='PadInput'>
            {/* map over the list of colors and render them */}
            {colors.map((color, index) => (
            <PadButton bgColor={color}  />
          ))}
        </div>
        
      </div>
       </div> 
      
    )
  } else{
    return (
      <div>
      <button onClick={isEdit} style={{width:"400px"}}>Edit Mode</button>
      <h3>Not On Edit Mode Currently</h3>
      </div>
    )
  }
} 
export default PadInput