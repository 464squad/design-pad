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
               <Button color="lol1" onDragEnd={this.handleDrag} draggable='true'> 1 </Button>
               <Button color="lol2" onDragEnd={this.handleDrag} draggable='true'> 2 </Button>
               <Button color="lol3" onDragEnd={this.handleDrag} draggable='true'> 3 </Button>
               <Button color="lol4" onDragEnd={this.handleDrag} draggable='true'> 4 </Button>
               <Button color="lol5" onDragEnd={this.handleDrag} draggable='true'> 5 </Button>
               <Button color="lol6" onDragEnd={this.handleDrag} draggable='true'> 6 </Button>
               <Button color="lol7" onDragEnd={this.handleDrag} draggable='true'> 7 </Button>
               <Button color="lol8" onDragEnd={this.handleDrag} draggable='true'> 8 </Button>
            </div>
        )
    }
}

export default PadInput
