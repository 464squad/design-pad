import React from 'react'
import "../css/DesignPad.css"

class DesignPad extends React.Component {
    render(){
        const { handleOnDrag, handleAllowDrop, handleOnDrop, edit } = this.props;

        return(
            <div
                className= "designPad"
                onDragStart={handleOnDrag}
                onDragOver={handleAllowDrop}
                onDrop={handleOnDrop}
                draggable={edit}
            >
            </div>
        )
    }
}

export default DesignPad;