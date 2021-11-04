import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


export class PadInput extends Component {

     uiStyle = {width:'50px',
     borderRadius:'15px',
     backgroundColor:'lightgray',}


     handleDrag = (event) => {
          console.log(event)
     }

     onDragStarted = (event) => {
         console.log(event)
         let colorElement  = event.target;
         let color = colorElement.getAttribute("color")
         console.log(colorElement)
         console.log(color)
         event.dataTransfer.setData("color", color)
     }

    render() {
        return (
            <div className="col-1" style={{backgroundColor:'blueviolet',
                    width:'370px',
                    height: '635px',
                    borderRadius:'15px',
                    position: 'absolute',
                    padding: '15px',
                    margin: 'auto'
            }}>
               <Button onDragStart={this.onDragStarted} color="red" onDragEnd={this.handleDrag} draggable='true'  style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
                   
               }}> 1 </Button>
               <Button onDragStart={this.onDragStarted} color="blue" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 2 </Button>
               <Button onDragStart={this.onDragStarted} color="green" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 3 </Button>
               <Button onDragStart={this.onDragStarted} color="yellow" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 4 </Button>
               <Button onDragStart={this.onDragStarted} color="indigo" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 5 </Button>
               <Button onDragStart={this.onDragStarted} color="purple" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 6 </Button>
               <Button onDragStart={this.onDragStarted} color="orange" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 7 </Button>
               <Button onDragStart={this.onDragStarted} color="black" onDragEnd={this.handleDrag} draggable='true' style={{
                   width:'100px',
                   borderRadius:'15px',
                   padding: '15px',
                   backgroundColor:'lightgrey',
                   float:  'none',
                   marginTop: '20px',
                   marginBottom: '50px',
                   marginLeft: '20px',
                   marginRight: '20px'
               }}> 8 </Button>
            </div>
        )
    }
}

export default PadInput
