import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


export class PadInput extends Component {

     uiStyle = {
        width:'100px',
        borderRadius:'15px',
        padding: '15px',
        backgroundColor:'lightgrey',
        float:  'none',
        marginTop: '20px',
        marginBottom: '50px',
        marginLeft: '20px',
        marginRight: '20px'
        
    }

    
     constructor(props) {
        super(props);
        this.state = { editMode: false }
    }

     handleDrag = (event) => {
          console.log(event)
     }

     onDragStarted = (event) => {
         let colorElement  = event.target;
         let color = colorElement.getAttribute("color")
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
               <Button onDragStart={this.onDragStarted} color="red" onDragEnd={this.handleDrag} draggable={this.state.editMode}  style={this.uiStyle}> 1 </Button>
               <Button onDragStart={this.onDragStarted} color="blue" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 2 </Button>
               <Button onDragStart={this.onDragStarted} color="green" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 3 </Button>
               <Button onDragStart={this.onDragStarted} color="yellow" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 4 </Button>
               <Button onDragStart={this.onDragStarted} color="indigo" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 5 </Button>
               <Button onDragStart={this.onDragStarted} color="purple" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 6 </Button>
               <Button onDragStart={this.onDragStarted} color="orange" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 7 </Button>
               <Button onDragStart={this.onDragStarted} color="black" onDragEnd={this.handleDrag} draggable={this.state.editMode} style={this.uiStyle}> 8 </Button>
            </div>
        )
    }
}

export default PadInput
