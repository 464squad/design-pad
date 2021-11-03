import React, { useState } from "react";
import './DesignPad.css';


export default function DesignPad(props) {
    const [clr, setClr] = useState(props.color);

    function dragOver (e) {
        e.preventDefault()
    }

    function handleDrop(e) {
        let data = e.dataTransfer.getData("colors")
        setClr(data);
    }
    


    return(
        <div className ='pad' style={{backgroundColor: clr}} 
            onDragOver ={dragOver}
            onDrop ={handleDrop}
        >

        </div>
    )


        
       
      }






