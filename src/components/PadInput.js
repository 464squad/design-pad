import React from 'react';
import PadItem from './PadItem';
import './PadInput.css';


export default function PadInput(props){

    return(
        <div className="PadInput">
            {/* <PadItem edit={props.edit} color="red"/>
            <PadItem edit={props.edit} color="blue"/>            <PadItem edit={props.edit} color="orange"/>
            <PadItem edit={props.edit} color="yellow"/>
            <PadItem edit={props.edit} color="green"/>
            <PadItem edit={props.edit} color="brown"/>
            <PadItem edit={props.edit} color="pink"/>
            <PadItem edit={props.edit} color="purple"/> */}
            <div className="PadItem"> <PadItem edit={props.edit} color="red"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="blue"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="orange"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="yellow"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="green"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="brown"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="pink"/></div>
            <div className="PadItem"> <PadItem edit={props.edit} color="purple"/></div>
        </div>
    );
}