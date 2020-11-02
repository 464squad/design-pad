import React from 'react'
import '../styles.css'

export default function PadInput(props) {
    
    //Hides the PadInput when the edit mode is on
    let customStyle = {display:""};
    props.editMode ? customStyle.display="grid" : customStyle.display="none";

    return (
        <div>
        <h1 className = "PadInput-h1">Design Input</h1>
            <div className = "PadInput-container" style = {customStyle}>
                <div className = "PadInput-box1">1</div>
                <div className = "PadInput-box2">2</div>
                <div className = "PadInput-box3">3</div>
                <div className = "PadInput-box4">4</div>
                <div className = "PadInput-box5">5</div>
                <div className = "PadInput-box6">6</div>
                <div className = "PadInput-box7">7</div>
                <div className = "PadInput-box8">8</div>
            </div>
        </div>
    )
}
