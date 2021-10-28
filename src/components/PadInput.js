import React from "react"
import "../css/PadInput.css"

class PadInput extends React.Component {

    constructor(props) {
        super(props);


    }

    

    render() {
        return <div class = "flex-container" >
            <div id = "k1" draggable = "true" > 1 </div>
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