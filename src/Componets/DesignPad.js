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
            <div className="p-3 border bg-dark"  
            style={{ height: '300px', width: '300px',
            margin: '10px',
            borderRadius: "25px",
            backgroundColor:this.state.color}}> 
                
            </div>
        )
    }
}

export default DesignPad
