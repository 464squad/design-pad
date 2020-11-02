import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBoxVisible: true
          };
    }
    // state = {
    //     isBoxVisible:false
    //   };

      toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
      };

    editButtonEvent = event => {
        // to prevent page reload on form submit
        // event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        // this.setState(true)
        console.log('current state in edit button event',this.state)
        // console.log('Im the edit button event')
    }

    render() {
        const { isBoxVisible } = this.state;
        
        return ( 
            <div className="container">

                <div className="show_box"> 
                    <button className="show_button" onClick={this.toggleBox}>Show Box</button>
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                        <p>{`${isBoxVisible ? "I'm the box" : "I'm the yellow box"}`}</p>
                    </div>
                </div>

                { /*TODO - Add PadInput Component */ } 
                <PadInput handleEditChange={this.editButtonEvent} />

                <br/> 
                
                { /*TODO - Add DesignPad Component */ } 
                <DesignPad/>

                <br/> 
                { /*TODO - Add DesignBoard Component */ } 
                <DesignBoard/>

                <br/>
                
                { /*TODO - Add editButton Component */ }

            </div>
        );
    }
}

export default DesignContainer;