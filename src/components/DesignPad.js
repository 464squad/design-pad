import React from 'react';
import "./DesignPad.css";


class DesignPad extends React.Component{
    state = {
        color: "grey"
        
    }
handleDragOver = (e) =>{
    e.preventDefault();
} 

handleDrop = (e) =>{
    e.preventDefault();
    const color = e.dataTransfer.getData("color")
    this.setState({color})
}




    render(){
        return(
            <div className = "pad1" style = {{backgroundColor: this.state.color}} 
            onDragOver = {this.handleDragOver}>
                
            </div>
        );
    }

    
}

export default DesignPad