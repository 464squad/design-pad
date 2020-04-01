import React from 'react';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import '../designboard.css';
import '../editBttn.css';


class EditBttn extends React.Component {

constructor(props){
    super(props);
this.clicc=this.clicc.bind(this)

this.state = {
    isToggleOn: true
};
}





clicc(event){
    event.preventDefault()
    this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        
      }));
      alert('click')
      }









    render(){
       const {post} = this.props
        return (
        <div >
            <h2 className= "bttn" onClick={this.clicc} >Edit: 
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </h2>

        </div>
        );

        
    }


}
export default EditBttn;