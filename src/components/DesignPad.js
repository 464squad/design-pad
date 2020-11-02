import React from 'react'
import '../styles.css'

export default function DesignPad(props) {

    return (
        <div>
        <h1 className = "DesignPad-h1">DESIGN PAD</h1>
            <div className="DesignPad-container">
                <div className="DesignPad-box1"></div>
                <div className="DesignPad-box2"></div>
                <div className="DesignPad-box3"></div>
                <div className="DesignPad-box4"></div>
            </div>
        </div>
    )
}