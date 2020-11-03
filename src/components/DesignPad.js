import React from "react";

class DesignPad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bgColor: props.bgColor,
        }
    }
  render() {
    const bgColor = this.state.bgColor;

    return (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => this.setState({ bgColor: e.dataTransfer.getData("color")})}
        className={`bg-${bgColor} design-pad`}
      ></div>
    );
  }
}

export default DesignPad;
