import React from "react";
import DesignPad from "./DesignPad"
import "../css/DesignBoard.css"


class DesignBoard extends React.Component{

    constructor(props){
        super(props);

        
    }
    
    //renders all the pads, each has an id so that we can change each pad's color
    //individually. We also pass the toggle props, which determines whether the pad
    //can change colors (if on it can change, if off it cannot change colors)
    render(){

        return <div className="container"  >
            
        <DesignPad id = "1" toggle = {this.props.toggle}/>
        <DesignPad id = "2" toggle = {this.props.toggle}/>
        <DesignPad id = "3" toggle = {this.props.toggle} />
        <DesignPad id = "4" toggle = {this.props.toggle} />
            </div>
    }
    
}



export default DesignBoard;
