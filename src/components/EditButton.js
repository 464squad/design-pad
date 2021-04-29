import React, { Component } from 'react'
import Board from './Board';
import Card from './Card';

export default class EditButton extends Component {
    constructor(){
        super();
        this.state = {
            editMode: false,
            draggable: false
        };
    }
    changeMode = () =>{
        if(this.state.editMode === false){
            this.setState({editMode: true})
            this.setState({draggable: true})
        }
        else{
            this.setState({editMode: false})
            this.setState({draggable: false})
        }
    }
    render() {
        return (
            <div>
                <button className="edit_button" onClick={() =>{this.changeMode()}}>
                    EDIT
                    {console.log(this.state.editMode)}
                </button>
                
                <main className="flexbox"> 
                    <Board id = "board_1" className = "board">
                    <Card id = "card_1" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>1</p>
                        
                    </Card>
                    <Card id = "cardInput_2" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>2</p>
                    </Card>
                    <Card id = "cardInput_3" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>3</p>
                    </Card>
                    <Card id = "cardInput_4" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>4</p>
                    </Card>
                    <Card id = "cardInput_5" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>5</p>
                    </Card>
                    <Card id = "cardInput_6" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>6</p>
                    </Card>
                    <Card id = "cardInput_7" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>7</p>
                    </Card>
                    <Card id = "cardInput_8" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>8</p>
                    </Card>

                    
                    </Board>
                    <Board id = "board_2" className = "board">
                    <Card id = "cardPad_1" className = "card" editMode = {this.state.editMode}>
                    {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                    <p>Pad 1</p> 
                        
                    </Card>
                    <Card id = "cardPad_2" className = "card" editMode = {this.state.editMode}>
                    {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                    <p>Pad 2</p> 
                        
                    </Card>
                    <Card id = "cardPad_3" className = "card" editMode = {this.state.editMode}>
                    {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                    <p>Pad 3</p> 
                        
                    </Card>
                    <Card id = "cardPad_4" className = "card" editMode = {this.state.editMode}>
                    {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                    <p>Pad 4</p> 
                        
                    </Card>
                    </Board>
                </main>
            </div>
        )
    }
}