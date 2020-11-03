import React from 'react';

const DesignBoardBody = () => {
    // boilerplate design board body functional component
    return ( <
        div >
        <
        h1 class = "header" > DESIGN PAD < /h1>  <
        div class = "board_container" >
        <
        div class = "box"
        draggable = "true"
        ondragstart = "drag(event)" > Pad 1 < /div> <
        div class = "box"
        draggable = "true"
        ondragstart = "drag(event)" > Pad 2 < /div> <
        div class = "box"
        draggable = "true"
        ondragstart = "drag(event)" > Pad 3 < /div> <
        div class = "box" > Pad 4 < /div> <
        /div> <
        /div>
    );
}



const DesignBoard = (props) => {
    //const { linkData, removeLink } = props;
    //{ /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <
        div >
        <
        DesignBoardBody / >
        <
        /div> 

    )
}

export default DesignBoard;