import React, { Component } from "react";
import DesignBoard from "./DesignBoard";
import "./Designcontainer.css";
import PadInput from "./PadInput";
import { useState } from "react";
//Need to button to work as true and false to disable edit

function DesignContainer() {

  const clearBoard = (event) => {
    window.location.reload()
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="name">Design Pad</h1>
        <button className="btn">Edit</button>
        <button className="btn" onClick={clearBoard}>
          Reset
        </button>
      </div>
      <PadInput />
      <DesignBoard />
    </div>
  )
}

export default DesignContainer
