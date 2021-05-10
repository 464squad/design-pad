import React from "react";
import "./editButton.css";

const CustomButton = (props) => {
  // created a custom button because different scenarios were tested to get the outcome but it is not need it.
  // the file was kept

  return (
    <div>
      <button onClick={props.clicked} className={props.styleName}>
        {props.stateChanged ? "Edit Off" : "Edit On"}
      </button>
    </div>
  );
};
export default CustomButton;
