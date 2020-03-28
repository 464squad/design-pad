import React, { Component } from 'react';


class Greyboxes extends Component{

        constructor(props){
                super(props)

                this.state = {
                        
                }
        }

        handleDrop = e => {
                e.preventDefault();
                e.stopPropagation();
              };

              handleDragOver = e => {
                e.preventDefault();
                e.stopPropagation();
              };

    
render(){
return(


<div>
        <div class = "container" > 
        <div className = "rectangle2" onDragOver={e=>this.handleDragOver(e)} onDrop= {e=>this.handleDrop(e)}/>

       <div className = "rectangle2"/>

        <div className = "rectangle2"/>

       <div className = "rectangle2"/>
        </div>
       </div>
);
}
}

export default Greyboxes;