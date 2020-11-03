import React, { useState } from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'

export default function DesignContainer() {

    const [isEdittable, setIsEdittable] = useState(false);

    return (
        <div>
            {/** Edit Button **/}
            <button className={`EditButton${isEdittable ? "Active" : ""}`}
                onClick={() => { setIsEdittable(!isEdittable) }}>EDIT</button>
            
            {/** Reset Button **/}
            <button className="ResetButton">RESET</button>

            {/** Components **/}
            <DesignBoard edit={isEdittable} />
            <PadInput editMode={isEdittable} />
        </div>
    )
}
