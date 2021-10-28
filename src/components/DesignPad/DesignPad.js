import React, { useState } from "react";
import './DesignPad.css';

export default function DesignPad(props) {
    const [clr, setClr] = useState(props.color);

    return(
        <div className ='pad' style={{backgroundColor: clr}} ></div>
    )
}