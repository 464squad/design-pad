import React from "react";
import styles from "../css/Input.module.css";

export default function Input(props) {
  const handleOnDragStart = e => {
    e.dataTransfer.setData("color", props.color);
  };

  return (
    <div
      className={styles.Input}
      draggable={props.edit}
      onDragStart={handleOnDragStart}
      style={{
        backgroundColor: props.edit ? "white" : "#c2c3fb",
        color: props.edit ? "gray" : "#898ac1"
      }}
    >
      {props.color}
    </div>
  );
}
