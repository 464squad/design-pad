import React from "react";


function PadInput(props) {

    const colors = props.colors || [];
    const isEditing = props.isEditing;
    const backgroundColor = isEditing ? 'bg-blue' : 'bg-gray';

    return (
        <u1 className = {`pad-input ${backgroundColor}`}>
            {colors.map((color) => (
                <li key = {color.id}
                    draggable = {isEditing ? true : false}
                    onDragStart={e => e.dataTransfer.setData('color', color)} className="pad-input-color">
                    {color}
                </li>
            ))}
        </u1>
    );

}


export default PadInput;
