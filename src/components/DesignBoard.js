import React from 'react';
import Pads from './Pads';

class DesignBoard extends React.Component {
constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
}

render() {
    const numbers = [1,2,3,4];
    const draggable= "false";
    const name = "boards";
    const DesignBoards = numbers.map((number) => 
        <Pads 
            key={number.toString()} 
            draggable= {draggable} 
            onDrop={this.props.onDrop} 
            onDragOver={this.props.onDragOver}
            name={number}
            dragColor={this.props.dragColor}
        /> 
        
    );
    return(
        <div className="PadInput">
            {DesignBoards}
        </div>
    );
}
}; 

export default DesignBoard;