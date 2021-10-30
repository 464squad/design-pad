import React from "react";


class DesignPad extends React.Component {
    constructor(props){
        super(props);

        
        this.state = {color: "grey"};

    }

    //handles drop event
    drop = (event) => {
        event.preventDefault();
        const keypad_id = event.dataTransfer.getData("keypad_id");
        if (this.props.toggle == "on"){
        
        if (keypad_id == "k1") {
            this.setState({color: "blue"});
        }

        else if (keypad_id == "k2"){
            this.setState({color: "black"});
        }
        else if (keypad_id == "k3"){
            this.setState({color: "orange"});
        }

        else if (keypad_id == "k4") {
            this.setState({color: "pink"});
        }

        else if (keypad_id == "k5") {
            this.setState({color: "yellow"});
        }

        else if (keypad_id == "k6") {
            this.setState({color: "red"});
        }

        else if (keypad_id == "k7") {
            this.setState({color: "violet"});
        }

        else if (keypad_id == "k8"){
            this.setState({color: "green"});
        }
    }

    else {
        return 
    }
    }
    
    dragOver = (event) => {
        event.preventDefault();
        
    }


    render() {

        return  <div id = {this.props.id}  onDrop = {this.drop} onDragOver = {this.dragOver} 
                  style = {{backgroundColor: this.state.color}}  >

        </div>


    }




}

export default DesignPad