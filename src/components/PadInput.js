import React from 'react';
import styles from './design.css'
import Input from './Input'


export default function PadInput(props) {
    
    return (
      <div
        className={styles.PadInput}
        style={{
          border: props.edit ? "thick solid #100f0f" : "thick solid #9a9999",
          backgroundColor: props.edit ? "#002bf5" : "#999bf8"
        }}
      >
        <Input edit={props.edit} color="red" />
        <Input edit={props.edit} color="green" />
        <Input edit={props.edit} color="blue" />
        <Input edit={props.edit} color="yellow" />
        <Input edit={props.edit} color="orange" />
        <Input edit={props.edit} color="purple" />
        <Input edit={props.edit} color="pink" />
        <Input edit={props.edit} color="gray" />
      </div>
    );
  }