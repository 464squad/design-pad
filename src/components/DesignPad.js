import React from 'react'
// import { ReactComponent } from '*.svg';
import '../designpad.css';
import PadInput from './PadInput.js'


class DesignPad extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            color: 'rgb(250, 4, 4)'
        }
    }

 
    onDropHandler = (event) => {
        // if (padButton.num === "1") {

        // }
    }

    dragOver = (event) => {
        event.preventDefault();
      }

    render(){
        return(
            <div>
                <div className="testPad" style={{background: this.state.color}} onDragOver={() => this.dragOver()} onDrop={() => this.onDropHandler()}></div>
            </div>
        )
    }
}


export default DesignPad