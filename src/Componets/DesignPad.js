import React, { Component } from 'react'

export class DesignPad extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
           color: 'grey'

       }
    }

    render() {
        return (
            <div style={{height:"150px",
            width:' 200px',
            borderRadius: "25px",
            backgroundColor:this.state.color}}> 
                
            </div>
        )
    }
}

export default DesignPad
