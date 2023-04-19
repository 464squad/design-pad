import React from 'react';
import "../css/PadInput.scss";

const ItemButton = ({ edit, color, handleOnDrag }) => {
    const stylier = { backgroundColor: edit ? "#E74C3C" : "#f6f6f6" }

    return (
        <input className="PadButton" type="color" defaultValue={color} placeholder={color} draggable={edit} onDragStart={handleOnDrag} style={stylier} disabled />
    );
}

export default ItemButton;
