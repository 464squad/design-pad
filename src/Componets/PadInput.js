import React, { Component } from 'react'

export class PadInput extends Component {

     uiStyle = {width:'50px',
     borderRadius:'15px',
     backgroundColor:'lightgray',}



    render() {
        return (
            <div style={{backgroundColor:'blueviolet'}}>
               <div style={this.uiStyle} draggable='true'>1</div> 
               <div style={this.uiStyle} draggable='true'>2</div> 
               <div style={this.uiStyle} draggable='true'>3</div> 
               <div style={this.uiStyle} draggable='true'>4</div> 
               <div style={this.uiStyle} draggable='true'>5</div> 
               <div style={this.uiStyle} draggable='true'>6</div> 
               <div style={this.uiStyle} draggable='true'>7</div> 
               <div style={this.uiStyle} draggable='true'>8</div> 
            </div>
        )
    }
}

export default PadInput
