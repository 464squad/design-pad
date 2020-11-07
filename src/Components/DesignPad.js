import React from 'react';


class DesignPad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: props.backgroundColor,
        }
    }

    render() {
        const backgroundColor = this.state.backgroundColor;

        return (
            <div 
            onDragOver = {(e) => e.preventDefault()}
            onDrop={(e) => this.setState({ backgroundColor: e.dataTransfer.getData("color")})}
            className={`bg-${backgroundColor} design-pad`}
            ></div>

        );
    
    }
}
export default DesignPad;
