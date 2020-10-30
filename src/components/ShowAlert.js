import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../design.css'


class ShowAlert extends Component {
  showAlert() {
    alert("Click okay to go back to drag/drop");
  }

  render() {
    return <button className= "editButton" onClick={this.showAlert}>Edit</button>;
  }
}

export default ShowAlert;

const rootElement = document.getElementById("root");
ReactDOM.render(<ShowAlert />, rootElement);