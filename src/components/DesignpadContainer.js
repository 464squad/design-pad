import React from 'react';
//import Form from './Form';
//importing stuff?

class DesignpadContainer extends React.Component {
    //maybe add a constructor? Not sure same with edit state here?
    /*constructor(props) {
        super(props)

        this.state = {
            
        } */
        render () {

            return (
                <div classname = "DesignBoard">
                    <h1>Design Pad</h1>
        
                    {/*pad component? */}
                    <button onClick = "myFunction()"> Edit</button>
                </div>
            );
        }
    
}


export default DesignpadContainer;