import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';


class DesignContainer extends React.Component {
  state = { EDIT: false };


  Edit = () => {
    this.setState(props => ({
      EDIT: !props.EDIT 
    }));
  };
    

    render() {
        const button = this.state.EDIT ? "edit_button_after" : "edit_button";
        const EDIT = this.state.EDIT

        return (
            <div>
                <div>
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