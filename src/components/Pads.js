import React from 'react';

class Pads extends React.Component {
    
constructor(props) {
    super(props);
    //this.onDragStart = this.onDragStart.bind(this);
}
/*
onDragStart(e){
    console.log("this.props",this.props)
    e.preventDefault();
    console.log("e",e.target.className);
    this.props.onDragStart();
}
*/
render() {
    const {value,draggable,onDragStart,onDrop,onDragOver,name,style,dragColor} = this.props;
    //console.log("props",this.props);

    return(
        <div 
            className="Pads" 
            style={style}
            name={name}
            draggable={draggable}  
            onDragStart={onDragStart} 
            onDrop={onDrop} 
            onDragOver={onDragOver}
            dragColor={dragColor}
        >
            {value}
        </div>
    );
}
}; 

export default Pads;

