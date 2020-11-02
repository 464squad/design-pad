import React from 'react';
import Title from './Title';
import EditButton from './EditButton';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';

class DesignContainer extends React.Component {
    
constructor(props) {
    super(props);
    this.state = {dragColor: "",edit:false};
    //this.onDragStart = this.onDragStart.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.edit = this.edit.bind(this);
}
edit(){
    console.log("testedit", this.state.edit);
    this.setState(prevState => ({
        edit: !prevState.edit
    }));
}
drag(e){
    console.log("test",e.target.getAttribute('name'));
    const dragColor = e.target.getAttribute('name');
    this.setState({dragColor: dragColor});
}
drop(e){
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundColor = this.state.dragColor; 
    
    console.log("drop", e.target.style);
} 
allowDrop(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("allowDrop",e.target.getAttribute('name'));
}

render() {
    
    const dragColor = this.state.dragColor;
    return (
        <div className="container-fluid">
            <h1><Title/></h1>
            <div className="lef">
                <EditButton edit={this.edit} />
                <PadInput onDragStart={this.drag} edit={this.state.edit}/>
            </div>
            <div className="rite">
                <DesignBoard onDrop={this.drop} onDragOver={this.allowDrop} dragColor={dragColor}/>
            </div>
        </div>
    );
}
}; 

export default DesignContainer;