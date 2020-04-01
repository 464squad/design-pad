import React from 'react';

class PadInput extends React.Component {
     constructor(props) {
     super(props);

     this.state = {
         padButton: [1, 2, 3, 4, 5, 6, 7, 8]
     }


     }
 
    render(){
        const { padButton } = this.state;
        return(
            <div className= "padButton">
                <div
                key={padButton.index}
                >
                    {padButton.index}
                </div>
            </div>

        );


    }


}

export default PadInput;
