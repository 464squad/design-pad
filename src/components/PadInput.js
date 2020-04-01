import React from 'react';
import '../designpad.css';

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButtons: [
            {id:1, num: "1"}, 
            {id:2, num: "2"}, 
            {id:3, num: "3"}, 
            {id:4, num: "4"}, 
            {id:5, num: "5"}, 
            {id:6, num: "6"}, 
            {id:7, num: "7"}, 
            {id:8, num: "8"}
        ]
     }


     }
 
    render(){
        const {padButtons} = this.state;
        return(
            <div className= "padButton">
                {
                    padButtons.map (padButton =>
                        <div
                            key={padButton.id}
                            draggable
                        >
                            {padButton.num}
                        </div>
                    )
                }
            </div>
        )
    }
    
    
}

export default PadInput