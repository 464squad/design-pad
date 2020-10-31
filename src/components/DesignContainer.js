import React from 'react';
import DesignBoard from './DesignBoard';
import './DesignContainer.css';
import PadInput from './PadInput';

class DesignContainer extends React.Component{
    state = { 
        edit:false 
    };

    setEditState = () => {
        this.setState(props => ({
            edit : !props.edit
        }));
    };

    render(){
        const edit = this.state.edit;
        const editBtn = this.state.edit ? "editOn" : "editOff";
        return (
            <div className="DesignContainer">
            <DesignBoard/>
            <PadInput edit={edit}/>
            <button className={editBtn} onClick={this.setEditState}>Edit</button>
            </div>
        );
    }
}

export default DesignContainer;
