import React from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'

export default function DesignContainer() {
    

    return (
        <div>
        <button className ="EditButton" onClick={console.log("testing addition of edit button")} >EDIT</button>
        <DesignBoard />
        <PadInput />
        </div>
    )
}
