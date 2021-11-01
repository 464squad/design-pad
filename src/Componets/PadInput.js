import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


export class PadInput extends Component {

     uiStyle = {width:'50px',
     borderRadius:'15px',
     backgroundColor:'lightgray',}

    render() {
        return (
            <div className="col-12" style={{backgroundColor:'blueviolet'}}>
               <Button draggable='true'> 1 </Button>
               <Button draggable='true'> 2 </Button>
               <Button draggable='true'> 3 </Button>
               <Button draggable='true'> 4 </Button>
               <Button draggable='true'> 5 </Button>
               <Button draggable='true'> 6 </Button>
               <Button draggable='true'> 7 </Button>
               <Button draggable='true'> 8 </Button>
            </div>
        )
    }
}

export default PadInput
