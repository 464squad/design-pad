import React,{Component} from 'react';
import DesignBoard from './DesignBoard';
import './Designcontainer.css';
import PadInput from './PadInput';
import { useState } from 'react';
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
            console.log(this.state.editBtn)        }
        else if(this.state.editBtn === 'true'){
            this.setState({editBtn: 'false'})
            console.log('turn off')
        }
        alert("hi");
        
    }

    render() {
        return (
            <div className='container'>
            <div className='header'>
                <h1 className= 'name'>Design Pad</h1>
                <button className='btn'  onClick={this.updateEdit}>Edit</button>
            </div>
            <PadInput offNon={this.state.editBtn}/> 
            <DesignBoard/>
        </div>
        )
    }
}

export default DesignContainer
