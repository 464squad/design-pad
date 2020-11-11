import React from 'react';

const Pad = (props) => {

  const handleDragOver = event => {

    event.dataTransfer.setData("color", props.color);

  };

  return (
    <div draggable={props.EDIT} onDragStart={handleDragOver}>
      {props.color}
    </div>
  );
}

const PadInput = (props) => {

  return (

    <div className="pad_container">
      <div className="pads">

        <Pad EDIT={props.EDIT} color="Yellow"/>
      </div>

      <div className="pads">
        <Pad EDIT={props.EDIT} color="Blue" />

      </div>

      <div className="pads">

        <Pad EDIT={props.EDIT} color="Green" />
      </div>

      <div className="pads">
        <Pad EDIT={props.EDIT} color="Brown" />
      </div>

      <div className="pads">
        <Pad EDIT={props.EDIT} color="Red"/>
      </div>

      <div className="pads">
        <Pad EDIT={props.EDIT} color="Pink" />
      </div>

      <div className="pads">
        <Pad EDIT={props.EDIT} color="Black" />
      </div>
      <div className="pads">
        <Pad EDIT={props.EDIT} color="Orange" />
      </div>
    </div>
  );
}

const InputPad = (props) => {
    
    return (

        <div>
            <PadInput/>
            <Pad/>
        </div> 

    )
}


export default InputPad;