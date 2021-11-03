import React from 'react'
import DesignPad from './DesignPad';
import "../css/DesignBoard.css"

class DesignBoard extends React.Component {
    board = ["1", "2", "3", "4"];

    render(){
        const { handleOnDrag, handleAllowDrop, handleOnDrop, edit } = this.props;
        const { board } = this;

        return(
            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board">
                    {board.map(function(board, i){
                        return(
                            <DesignPad 
                                edit={edit} 
                                key={i} 
                                handleOnDrag={handleOnDrag} 
                                handleAllowDrop={handleAllowDrop} 
                                handleOnDrop={handleOnDrop}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default DesignBoard;