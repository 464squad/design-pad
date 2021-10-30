import React from "react"
import DesignBoard from "./DesignBoard"
import PadInput from './PadInput'
import "../css/DesignContainer.css"

class DesignContainer extends React.Component{
     constructor(props){
         super(props)
         }

    render(){
        return(
            <div> 
                <h1 > Design Pad </h1>
                <p> drag and drop the numbers to change colors on the Design Pad</p>
                <DesignBoard />
                <PadInput/>
                
            </div>
        )
    }

}
export default DesignContainer
