import React from "react"
import "../css/PadInput.css"

class PadInput extends React.Component {

    constructor(props) {
        super(props);


    }


    //gives us the value of the key that is currently being dragged
    dragStart = (event) => {
        const target = event.target.id
        event.dataTransfer.setData("keypad_id", target);
        console.log(target)
        
    } 



    dragOver = (event) => {
        console.log("Dragover");
        event.preventDefault();
    }

    render() {
        // creates boxes and makes them draggable 
        return <div className = "flex-container" onDrop = {this.drop} onDragStart = {this.dragStart} 
                 onDragOver = {this.dragOver}>
            <div id = "k1" draggable = "true"  > blue </div>
            <div id = "k2" draggable = "true"> black </div>
            <div id = "k3" draggable = "true"> orange </div>
            <div id = "k4" draggable = "true"> pink </div>
            <div id = "k5" draggable = "true"> yellow </div>
            <div id = "k6" draggable = "true"> red </div>
            <div id = "k7" draggable = "true"> violet </div>
            <div id = "k8" draggable = "true"> green </div>
        </div>
    }
}

export default PadInput