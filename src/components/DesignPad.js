import React from 'react';

const DesignPadBody = () => {
    // boilerplate table header functional component
    return ( 

        <div>
            <div class="pad_container">
                <div class="pads"> 1 </div>
                <div class="pads"> 2 </div>
                <div class="pads"> 3 </div>
                <div class="pads"> 4 </div>
                <div class="pads"> 5 </div>
                <div class="pads"> 6 </div>
                <div class="pads"> 7 </div>
                <div class="pads"> 8 </div>
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