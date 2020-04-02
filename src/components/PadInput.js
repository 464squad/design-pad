import React from 'react';
import '../designpad.css';

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButtons: [
            {id: 1, color: "black" },
            {id: 3, color: "pink"}, 
            {id: 4, color: "purple"}, 
            {id: 5, color: "blue"}, 
            {id: 6, color: "red"}, 
            {id: 7, color: "orange"}, 
            {id: 8, color: "yellow"}
        ],

         draggedInput: {}
     }

     }
     
     onInputDrag = (event, padButton) => {
        event.preventDefault();
        this.props.onDrag(padButton)
     }
 
    render(){
        const {padButtons} = this.state;
        return(
            <div>
                {
                    padButtons.map((padButton)=>{
                        return(

                        <div
                            className= "padButton"
                            key={padButton.id}
                            draggable={true}
                            onDrag={(event) => this.onInputDrag(event, padButton)}
                        >
                        {padButton.id}
                        </div>
                        )

                    })
                }
            </div>
                    

        )
    }
    
    
}

export default PadInput