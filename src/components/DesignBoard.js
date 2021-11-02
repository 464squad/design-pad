import React from 'react'
import DesignPad from './DesignPad';
import "../css/DesignBoard.css"

class DesignBoard extends React.Component {

    render(){
        return(
            <div class="flex-container flex-column">
            <div class="flex-container flex-wrap" id="board">
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>

            </div>
        </div>
        )
    }
}

export default DesignBoard;