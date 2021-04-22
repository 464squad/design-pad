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
                <button onClick={() =>{this.changeMode()}}>
                    Edit
                    {console.log(this.state.editMode)}
                </button>
                <main className="flexbox">
                    <Board id = "board_1" className = "board">
                    <Card id = "card_1" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                        {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                        <p>Card One</p>
                        
                    </Card>
                    </Board>
                    <Board id = "board_2" className = "board">
                    <Card id = "card_2" className = "card" draggable = {this.state.draggable} editMode = {this.state.editMode}>
                    {console.log("Draggable is:" + this.state.draggable + ", while editMode is:" + this.state.editMode)}
                    <p>Card Two</p> 
                        
                    </Card>
                    </Board>
                </main>
            </div>
        )
    }
}

