import React from 'react';

const DesignPadBody = () => {
    // boilerplate table header functional component
    return ( 

        <div>
            <div class="pad_container">
                <div class="pads" draggable="true"> 1 </div>
                <div class="pads" draggable="true"> 2 </div>
                <div class="pads" draggable="true"> 3 </div>
                <div class="pads" draggable="true"> 4 </div>
                <div class="pads" draggable="true"> 5 </div>
                <div class="pads" draggable="true"> 6 </div>
                <div class="pads" draggable="true"> 7 </div>
                <div class="pads" draggable="true"> 8 </div>
            </div>
        </div>
        
    );
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }


const DesignPad = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <div>
            <DesignPadBody/>
        </div>
        
    )
}

export default DesignPad;