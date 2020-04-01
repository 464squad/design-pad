import React from 'react';
import '../padInput.css';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import EditBttn from './EditBttn'
class PadInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            backgroundColor: ""
        }
    }

    onDrop = (event) => {
        this.setState({

        })
    }
    
    

    render (){

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
        );
    }

}

export default PadInput;