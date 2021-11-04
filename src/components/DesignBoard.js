import React from 'react';
import DesignPad from './DesignPad/DesignPad'

class DesignBoard extends React.Component {
    render() { 
        return <div style={{margin: "0em 0em 0em 4em"}}>
            <div className="design-board1"><DesignPad color='gray'/></div>
            <div className="design-board2"><DesignPad color='gray'/></div>
            <div className="design-board3"><DesignPad color='gray'/></div>
            <div className="design-board4"><DesignPad color='gray'/></div>
        </div>;
    }
}
 
export default DesignBoard;
