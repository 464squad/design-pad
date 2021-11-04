import React, { Component } from "react";
import DesignBoard from "./DesignBoard";
import "./Designcontainer.css";
import PadInput from "./PadInput";
import { useState } from "react";

const clearBoard = (event) => {window.location.reload()}

class DesignContainer extends React.Component{
  state={edit:false};
  click = () => {this.setState(props => ({edit: !props.edit}))};
  
 
  

  render(){
  

  const edit=this.state.edit;

  return (
    <div className="container">
      <div className="header">
        <h1 className="name">Design Pad</h1>
        <button className="btn" onClick={this.click}>Edit</button>
        <button className="btn" onClick={clearBoard}>
          Reset
        </button>
      </div>
      <PadInput edit={edit}/>
      <DesignBoard />
    </div>
  );
  }
}

export default DesignContainer
