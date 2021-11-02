import React,{Component} from 'react';
import DesignBoard from './DesignBoard';
import './Designcontainer.css';
import PadInput from './PadInput';
//Need to button to work as true and false to disable edit
export class DesignContainer extends Component {
    constructor(props){
        super(props)
            this.state={
                editBtn: 'false'
            }
        
    }
    updateEdit = () => { 
        if(this.state.editBtn === 'false'){
            this.setState({editBtn: 'true'})
            console.log(this.setState({editBtn: 'true'}))
        }
        else if(this.state.editBtn === 'true'){
            this.setState({editBtn: 'false'})
        }
        alert("hi");
    }

    clearBoard = (event) => {
        document.querySelectorAll('#all-pads div').forEach(item => {item.style.background="red"}) 
    }




    render() {
        return (
            <div className='container'>
            <div className='header'>
                <h1 className= 'name'>Design Pad</h1>
                <button className='btn'  onClick={this.updateEdit}>Edit</button>
                <button className='btn' onClick={this.clearBoard}>Reset</button>
            </div>
            {/* <PadInput /> */}
            <DesignBoard/>
        </div>
        )
    }
}

export default DesignContainer
