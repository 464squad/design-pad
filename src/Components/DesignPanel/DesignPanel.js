import React from 'react';
import './DesignPanel.css';

const handleDrag = (e, props) => {
  const color = e.target.value;
  props.updatebtnColor(color);
};

const DesignPanel = props => {
  // pColor.forEach(item => {
  //   console.log(item);
  // });

  return (
    <div
      name='plshelp'
      id='mainbox'
      className='DesignPanel__container'
      style={{ backgroundColor: props.changePanelColor }}
    >
      <button
        id='1'
        className='DesignPanel__button'
        value='red'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        1
      </button>
      <button
        id='2'
        className='DesignPanel__button'
        value='black'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        2
      </button>
      <button
        id='3'
        className='DesignPanel__button'
        value='green'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        3
      </button>
      <button
        id='4'
        className='DesignPanel__button'
        value='brown'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        4
      </button>
      <button
        id='5'
        className='DesignPanel__button'
        value='blue'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        5
      </button>
      <button
        id='6'
        className='DesignPanel__button'
        value='pink'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        6
      </button>
      <button
        id='7'
        className='DesignPanel__button'
        value='gray'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        7
      </button>
      <button
        id='8'
        className='DesignPanel__button'
        value='orange'
        draggable='true'
        onDragStart={e => {
          handleDrag(e, props);
        }}
      >
        8
      </button>
    </div>
  );
};

export default DesignPanel;
