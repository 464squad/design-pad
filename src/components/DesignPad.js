import React from 'react'
import "../css/DesignPad.css"

class DesignPad extends React.Component {
    render(){
        const { handleAllowDrop, handleOnDrop, edit } = this.props;

        return(
            <div
                className= "designPad"
                onDragOver={handleAllowDrop}
                onDrop={handleOnDrop}
                draggable={edit}
            >
            </div>
        )
    }
}

export default DesignPad;