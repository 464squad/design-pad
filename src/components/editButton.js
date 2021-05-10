import React from "react";
import "./editButton.css";
import CustomButton from "./customButton";

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: true,
      // button_clickability: 'editButton_enabled'
    };
  }

  changedEditMode = () => {
    // change the state of the button
    this.setState((state) => ({ inEditMode: !state.inEditMode }));
  };

  render() {
    // console.log(this.state.inEditMode);
    let colorStyle = null;
    // change to the css class based on the state on inEditMode
    if (this.state.inEditMode) {
      colorStyle = "editButton_enabled";
    } else {
      colorStyle = "editButton_disabled";
    }

    return (
      <div className="editButtonDiv">
        <p style={{ textAlign: "center" }}>Button is working fine now</p>
        <div className="buttonStyle">
          <CustomButton
            styleName={colorStyle}
            clicked={this.changedEditMode}
            stateChanged={this.state.inEditMode}
          />
        </div>
      </div>
    );
  }
}

export default EditButton;
