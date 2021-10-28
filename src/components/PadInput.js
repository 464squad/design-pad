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
        /*
        return {
            
            this.props.handleKey(target)
        }
        */
        
    } 

    //Drop function may need to exist outside this component
    /*
    drop = (event) => {
        event.preventDefault();
        var keypad_id = event.dataTransfer.getData("keypad_id");
        console.log(keypad_id);

    } */


    dragOver = (event) => {
        console.log("Dragover");
        event.preventDefault();
    }

    render() {
        // creates boxes and makes them draggable 
        return <div className = "flex-container" onDrop = {this.drop} onDragStart = {this.dragStart} 
                 onDragOver = {this.dragOver}>
            <div id = "k1" draggable = "true"  > 1 </div>
            <div id = "k2" draggable = "true"> 2 </div>
            <div id = "k3" draggable = "true"> 3 </div>
            <div id = "k4" draggable = "true"> 4 </div>
            <div id = "k5" draggable = "true"> 5 </div>
            <div id = "k6" draggable = "true"> 6 </div>
            <div id = "k7" draggable = "true"> 7 </div>
            <div id = "k8" draggable = "true"> 8 </div>
        </div>
    }
}

export default PadInput