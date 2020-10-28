import React from 'react';

const DesignBoardHeader = () => {
    // boilerplate table header functional component
    return ( 
        
        <thead>
            <tr>
                <th> DESIGN PAD TESTING</th> 
            </tr> 
        </thead>
    );
}

const DesignBoardBody = () => {
    // boilerplate design board body functional component
    return ( 
        // <thead>
        //     <tr>
        //         <th> DESIGN PAD </th> 
        //     </tr> 
        // </thead>
        <div>
            <div class="Pad">
                <div class="board_container">
                    <div class="box"> Pad 1 </div>
                    <div class="box"> Pad 2 </div>
                    <div class="box"> Pad 3 </div>
                    <div class="box"> Pad 4 </div>
                </div>
            </div>
        </div>
    );
}



const DesignBoard = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <table>
            <DesignBoardHeader/>
            <DesignBoardBody/>
        </table>
        
    )
}

export default DesignBoard;