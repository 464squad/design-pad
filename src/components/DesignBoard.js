import React from 'react'
import DesignPad from './DesignPad'
import './DesignBoard.css';

class DesignBoard extends React.Component{

    render(){
        return(
            <div className="DesignBoard">
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>
            </div>
        );
    }
}

export default DesignBoard;