import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


export class PadInput extends Component {

     uiStyle = {width:'50px',
     borderRadius:'15px',
     backgroundColor:'lightgray',}


     handleDrag = (event) => {
          console.log(event)
     }

    render() {
        return (
            <div className="col-12" style={{backgroundColor:'blueviolet'}}>
               <Button onDragEnd={this.handleDrag} draggable='true'> 1 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 2 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 3 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 4 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 5 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 6 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 7 </Button>
               <Button onDragEnd={this.handleDrag} draggable='true'> 8 </Button>
            </div>
        )
    }
}

export default PadInput
