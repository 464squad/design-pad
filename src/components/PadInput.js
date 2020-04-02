import React from 'react';

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButtons: [
            {id:1, num: "1", cssName: "padButton1"}, 
            {id:2, num: "2", cssName: "padButton2"}, 
            {id:3, num: "3", cssName: "padButton3"}, 
            {id:4, num: "4", cssName: "padButton4"}, 
            {id:5, num: "5", cssName: "padButton5"}, 
            {id:6, num: "6", cssName: "padButton6"}, 
            {id:7, num: "7", cssName: "padButton7"}, 
            {id:8, num: "8", cssName: "padButton8"}
        ]
        
     }
    }
    onDrag = (event, padButton) => {
        event.preventDefault();
        this.props.onDrag(this.state.padButton)
        }
      
    

     
 
    render() {
        const {padButtons} = this.state;
        return(
            <div className= "padButton">
                {
                    padButtons.map (padButton =>
                        <div 
                            key={padButton.id}
                            draggable
                            onDrag={ (event) => this.onDrag(event, padButton.cssName)}
                        >
                            {padButton.num}
                        </div>
                    )
                }
            </div>
        )
    }
}
    
    


export default PadInput;
