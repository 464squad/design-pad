import React from 'react';

const DesignPadBody = () => {
    // boilerplate table header functional component
    return ( 
        
        
        <div class="pad_container">
            <div class="pads"> Im the pad to the left</div>
            
        </div>
    );
}




const DesignPad = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <table>
            <DesignPadBody/>
        </table>
        
    )
}

export default DesignPad;