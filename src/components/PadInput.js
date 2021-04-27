// Here we must Render our PadInputs Container

import React from 'react';

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButtons: [

            {id: 'Red', color: "rgb(250, 4, 4)" },
            {id: 'Orange', color: "rgb(248, 113, 2)" },
            {id: 'Yellow', color: "rgb(253, 249, 5"}, 
            {id: 'Green', color: "rgb(72, 243, 4)"}, 
            {id: 'Sky-Blue', color: "rgb(3, 175, 243)"}, 
            {id: 'Blue', color: "rgb(67, 2, 247)"}, 
            {id: 'Violet', color: "rgb(199, 2, 248)"}, 
            {id: 'Burgundy', color: "rgb(87, 2, 61)"}
        ]
     }


     }

     onInputDrag = (event, padButton) => {
        event.preventDefault();
        this.props.onDrag(padButton)
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