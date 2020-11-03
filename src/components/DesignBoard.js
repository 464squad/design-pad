import React from 'react'
import DesignPad from './DesignPad'

export default function DesignBoard(props) {

    console.log(props.edit);

    return (
        <div>
            <DesignPad editMode = {props.edit} />
        </div>
    )
}
