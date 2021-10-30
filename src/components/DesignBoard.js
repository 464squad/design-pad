import React from "react";
import DesignPad from "./DesignPad"
import "../css/DesignBoard.css"


class DesignBoard extends React.Component{

    constructor(props){
        super(props);
    }
    
    
    
    render(){

        return <div className="container"  >
        <DesignPad id = "1"/>
        <DesignPad id = "2"/>
        <DesignPad id = "3" />
        <DesignPad id = "4"/>
            </div>
    }
    
}



export default DesignBoard;
