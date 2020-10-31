import React from 'react';
import DesignBoard from './DesignBoard';
import './DesignContainer.css';
import PadInput from './PadInput';

class DesignContainer extends React.Component{

    render(){
        return (
            <div className="DesignContainer">
            <DesignBoard/>
            <PadInput/>
            </div>
        );
    }
}

export default DesignContainer;
