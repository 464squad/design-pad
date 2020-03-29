import React from "react";
import  "../css/DesignContainer.css";
import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";
export default class DesignContainer extends React.Component {
    state={
        edit:false
    }
    handleClick = () =>{
        this.setState( (props)=>({
            edit:!props.edit
        }))
    }
    render() {
        
      return (
        <div>
         <button onClick={this.handleClick}> Edit</button>
            <PadInput edit={this.state.edit}/>
            <DesignBoard/>
          </div>
      );
    }
  }
  