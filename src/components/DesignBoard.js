import React from "react";
import DesignPad from "./DesignPad"
import "../css/DesignBoard.css"


class DesignBoard extends React.Component{

    constructor(props){
        super(props);

        
    }
    
    
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
