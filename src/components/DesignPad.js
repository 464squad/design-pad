import React from 'react';

const DesignPadBody = () => {
    // boilerplate table header functional component
    return ( 

        <div>
            <div class="pad_container">
                <div className="pads" id="pads1"> 1 </div>
                <div className="pads" id="pads2"> 2 </div>
                <div className="pads" id="pads3"> 3 </div>
                <div className="pads" id="pads4"> 4 </div>
                <div className="pads" id="pads5"> 5 </div>
                <div className="pads" id="pads6"> 6 </div>
                <div className="pads" id="pads7"> 7 </div>
                <div className="pads" id="pads8"> 8 </div>
            </div>
        </div>
        
    );
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