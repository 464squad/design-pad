import React from 'react';
import '../design.css'

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButtons: [
            {id: 1, color: "rgb(250, 4, 4)" },
            {id: 2, color: "rgb(248, 113, 2)" },
            {id: 3, color: "rgb(253, 249, 5"}, 
            {id: 4, color: "rgb(72, 243, 4)"}, 
            {id: 5, color: "rgb(3, 175, 243)"}, 
            {id: 6, color: "rgb(67, 2, 247)"}, 
            {id: 7, color: "rgb(199, 2, 248)"}, 
            {id: 8, color: "rgb(87, 2, 61)"}
          ]
       }
     }

     onInputDrag = (event, padButton) => {
        event.preventDefault();
        this.props.onDrag(padButton)
     }

     dragStartHandler(event,padButton) {
        console.log(event); // undefined
        this.props.onDragStart(padButton)
       }
 
    render(){
        const {padButtons} = this.state;

        return(
            <div className= 'padInput'>
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