import React from 'react';
import ItemButton from './ItemButton';
import "../css/PadInput.scss";

const PadInput = ({ edit, handleOnDrag }) => {
    const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#16A085", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22"];
    const stylier = { backgroundColor: edit ? "#339FB7" : "#87D1E1" };

    return (
        <div className="PadInput" style={stylier}>
            {colors.map(function (color, i) {
                return (<ItemButton edit={edit} key={i} color={color} handleOnDrag={handleOnDrag} />)
            })}
        </div>
    )
}

export default PadInput;