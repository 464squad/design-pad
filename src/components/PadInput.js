import React from 'react';
import '../padInput.css';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import EditBttn from './EditBttn'
import { component } from 'react'
class PadInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          //  backgroundColor: ""
          squares: [{s1: 1,
        color: "white"
        },{s1: 2,
        color: "white"
        },{s1: 3,
        color: "white"
        },{s1: 4,
        color: "white"
        }]
        }

        
    }

    onDrop = (event, squares) => {
        //this.setState({
//
  //      })
        event.preventDefault()
        this.props.onDrag(squares)
    }
    
    

    render (){
        const {squares} =this.state;
//map(())
        return(
            
            <div className = "MainContainer clearfix">
                <DragDropContainer targetKey="pad1" onDrop={console.log("dropped")}>
                    <div>1</div> 
                </DragDropContainer>

                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>2</div>
                </DragDropContainer>
                
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>3</div>
                </DragDropContainer>
                    
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>4</div>
                </DragDropContainer>
                    
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>5</div>
                </DragDropContainer>
                    
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>6</div>
                </DragDropContainer>
                    
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>7</div>
                </DragDropContainer>
                    
                <DragDropContainer targetKey="pad1" onDrop={this.onDrop}>
                    <div>8</div>
                </DragDropContainer>
            </div>
            /*<div className="pad"
            key={squares.s1}
            draggable={true}
            onnDrag={(event)=>{this.onDrop(event,squares)}}>
                {squares.s1}
            </div>
            */
        );
    }

}

export default PadInput;