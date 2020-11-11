import React from 'react';


const DragAndDrop = props => {
    const handleDragEnter = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragLeave = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragOver = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDrop = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    
  };


const DesignPad = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <div>
            <DesignPadBody/>
            <DragAndDrop/>
        </div>
        
    )
}

export default DesignPad;