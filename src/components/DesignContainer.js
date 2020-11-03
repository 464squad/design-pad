import React, { useState } from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'

export default function DesignContainer() {
    
    const [isEdittable, setIsEdittable] = useState(false);

    return (
        <div>
        <button className ={`EditButton${isEdittable ? "Active" : ""}`}
         onClick = {() => {setIsEdittable(!isEdittable)}}>EDIT</button>
        <DesignBoard edit = {isEdittable}  />
        <PadInput editMode = {isEdittable} />
        </div>
    )
}
