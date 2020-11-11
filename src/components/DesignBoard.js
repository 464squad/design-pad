import React from 'react';
import DesignPad from "./DesignPad";

const DesignBoardBody = () => {
    // boilerplate design board body functional component
    return ( 
        <div>
            <h2 className="header">DESIGN PAD </h2> 
            <div className="board_container">
                <div className="box" id="box1"> Pad 1 </div>
                <div className="box" id="box2"> Pad 2 </div>
                <div className="box" id="box3"> Pad 3 </div>
                <div className="box" id="box4"> Pad 4 </div>
            </div>
        </div>
    );
}



const DesignBoard = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <div>
            <DesignBoardBody/>
        </div> 

    )
}

export default DesignBoard;