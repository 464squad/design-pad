import React from 'react';

const DesignBoardHeader = () => {
    // boilerplate table header functional component
    return ( <
        thead >
        <
        tr >
        <
        th > DESIGN PAD < /th> <
        /tr> <
        /thead>
    );
}


const TableBody = props => {
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return ( <
            tr key = { index } >
            <
            td > { row.name } < /td> <
            td > < a href = { row.URL } > { row.URL } < /a></td >
            <
            td > < button onClick = {
                () => props.removeLink(index) } > Delete < /button></td >
            <
            /tr>
        );
    });

    return <tbody > { rows } < /tbody>;
}

const Table = (props) => {
    //const { linkData, removeLink } = props;
    { /*TODO - return <table> component, TableHeader and TableBody  */ }
    return (

        <
        table >
        <
        DesignBoardHeader / >
        <
        TableBody linkData = { props.linkData }
        removeLink = { props.removeLink }
        /> <
        /table>

    )



}

export default Table;