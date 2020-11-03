import React from 'react';

const DesignPadBody = () => {
    // boilerplate table header functional component
    return ( 

        <div>
            <div class="pad_container">
                <div className="pads" id="pads1" 
                style={{ backgroundColor: "yellow" }} draggable={true} > 1 </div>
                <div className="pads" id="pads2"
                style={{ backgroundColor: "orange" }} draggable={true} > 2 </div>
                <div className="pads" id="pads3"
                style={{ backgroundColor: "red" }} draggable={true} > 3 </div>
                <div className="pads" id="pads4"
                style={{ backgroundColor: "purple" }} draggable={true} > 4 </div>
                <div className="pads" id="pads5"
                style={{ backgroundColor: "blueviolet" }} draggable={true} > 5 </div>
                <div className="pads" id="pads6"
                style={{ backgroundColor: "turquoise" }} draggable={true} > 6 </div>
                <div className="pads" id="pads7"
                style={{ backgroundColor: "green" }} draggable={true} > 7 </div>
                <div className="pads" id="pads8"
                style={{ backgroundColor: "brown" }} draggable={true} > 8 </div>
            </div>
        </div>
        
    );
}

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
    return (
      <div className={'drag-drop-zone'}
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)} >
            
        <p>Drag files here to upload</p>
      </div>
    );
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