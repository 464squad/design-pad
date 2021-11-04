import React from 'react'
import "../css/DesignContainer.css"
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';

class DesignContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false
        }
    }

    handleClick = () => {
        if(this.state.edit === false){
            this.setState({edit: true})
        } else {
            this.setState({edit: false})
        }
    }

    handleAllowDrop = (e) => {
        if(this.state.edit !== false){
            e.preventDefault();
        }
    }
      
    handleOnDrag = (e) => {
        e.dataTransfer.setData("color", e.target.value);
    }
      
    handleOnDrop = (e) => {
        e.preventDefault();
        var newColor = e.dataTransfer.getData("color");
        e.target.style.backgroundColor = newColor
    }

    render(){
        const { handleClick, handleOnDrag, handleAllowDrop, handleOnDrop } = this;
        const { edit } = this.state;
        const EditButton = edit ? "topContainer--editButton Editing" : "topContainer--editButton NotEditing";

        return(
            <div className="DesignContainer">
                <div className="topContainer">
                    <div className="topContainer--left"></div>
                    <div className="topContainer--header">- DESIGN PAD -</div>
                    <div className="topContainer--right">
                        <button className={EditButton} onClick={handleClick}>EDIT</button>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="mainContainer--left"><PadInput edit={edit} handleOnDrag={handleOnDrag} /></div>
                    <div className="mainContainer--center">
                        <DesignBoard 
                            edit={edit} 
                            handleOnDrag={handleOnDrag}
                            handleAllowDrop={handleAllowDrop} 
                            handleOnDrop={handleOnDrop} 
                        />
                    </div>
                    <div className="mainContainer--right"></div>
                </div>
                <div className="bottomContainer">
                    <div className="bottomContainer--instr">Fill me with colors</div>
                    <div className="bottomContainer--cred">Made by Chanyu, Usama, Michelle, Tahmina</div>
                </div>
            </div>
        )
    }
}

export default DesignContainer;