import React from 'react';
import '../designboard.css'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class DesignBoard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: "burlywood"
        }
    }

    onDragOver = (event) => {
        event.preventDefault()

    }

    ondrop = (event) => {
        this.setState({
            color:this.props.currentInput.color
        })
    }
    
    render() {

        return(

            /*
            <div className="boardContainer clearfix">
               <DropTarget targetKey="pad1" dragData={this.state} onHit={console.log("dropped to pad 1")}> 
                    <div className="pad1"> 1 </div> 
                </DropTarget>
                <div className="pad2"> 2 </div>
                <div className="pad3"> 3 </div>
                <div className="pad4"> 4 </div>*/
                <div className ="boardContainer clearfix">
                    <div class= "boardContainer masterContainer" > 
                       <div class= "pad1" style= {{backgroundColor: this.state.color}}
                       onDragOver ={this.onDragOver} ondrop={this.ondrop}
                        ></div>
                            <div class= "pad2" style= {{backgroundColor: this.state.color}}
                       onDragOver ={this.onDragOver} ondrop={this.ondrop}
                        ></div>
                            <div class= "pad3" style= {{backgroundColor: this.state.color}}
                       onDragOver ={this.onDragOver} ondrop={this.ondrop}></div>
                       <div class= "pad4" style= {{backgroundColor: this.state.color}}
                       onDragOver ={this.onDragOver} ondrop={this.ondrop}
                        >
                        </div>
                        </div>
                    </div>

            
        );
    }

}

export default DesignBoard;