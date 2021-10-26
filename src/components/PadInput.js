import React from "react"
import "../css/PadInput.css"

class PadInput extends React.Component {
    render() {
        return <div class = "flex-container" >
            <div className = {"KeyPad"} > 1 </div>
            <div className = {"KeyPad"} > 2 </div>
            <div className = {"KeyPad"} > 3 </div>
            <div className = {"KeyPad"} > 4 </div>
            <div className = {"KeyPad"} > 5 </div>
            <div className = {"KeyPad"} > 6 </div>
            <div className = {"KeyPad"} > 7 </div>
            <div className = {"KeyPad"} > 8 </div>

        </div>
    }
}

export default PadInput