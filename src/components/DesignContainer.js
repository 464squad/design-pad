import React from 'react';
import DesignPad from './DesignPad';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {

        return (
            <div className="container">
                
                {/*TODO - Add PadInput Component */}
                    <PadInput/>            
                <br/>

                {/*TODO - Add DesignBoard Component */}
                    

                <br/>
                {/*TODO - Add DesignPad Component */}
                   
                <br/>
                {/*TODO - Add editButton Component */}
                
                
            </div>
        );
    }
}

export default DesignContainer;