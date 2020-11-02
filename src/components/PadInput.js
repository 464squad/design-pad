import React from 'react';
import Pads from './Pads';

class PadInput extends React.Component {
constructor(props) {
    super(props);
    
}

render() {
    const {edit} = this.props;
    const draggable= "true"
    const numbers = [1,2,3,4,5,6,7,8];
    const colors = ["pink","yellow","brown","purple","blue","green","orange","red"];
    const name = "pads";
    const PadsItems = numbers.map((number) => 
        //console.log("drag to hell",draggable);
        
            <Pads 
                key={number.toString()} 
                value={number}
                draggable= {draggable}
                onDragStart={this.props.onDragStart}
                name={colors[number-1]}
                style={{backgroundColor: colors[number-1]}}
            /> 
        
        
    );
    return(
        <div className={`PadInput ${edit ? "GreyOut" : ""}`}>
            <div className={`${edit ? "GreyOut2" : ""}`}>
                {PadsItems}
            </div>
        </div>
    );
}
}; 

export default PadInput;