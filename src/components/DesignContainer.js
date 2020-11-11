import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
  state = { EDIT: false };


  Edit = () => {
    this.setState(props => ({
      editing: !props.editing
    }));
  };
    

    render() {
        const button = this.state.EDIT ? "edit_button" : "edit_button_after";
        const EDIT = this.state.EDIT
        return (
            <div>
                <div>
                    <h3>DESIGN PAD</h3>
                    <button className={button} onClick={this.Edit}>
                    EDIT
                    </button>
                </div>

                <PadInput EDIT={EDIT} />
                <DesignBoard />
            </div>
    );
    }
}

export default DesignContainer;