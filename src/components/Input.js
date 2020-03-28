import React from "react";
import styles from "../css/Input.module.css";

export default function Input(props) {
  const handleOnDragStart = e => {
    e.dataTransfer.setData("color", props.color);
  };

  return (
    <div
      className={styles.Input}
      draggable="true"
      onDragStart={handleOnDragStart}
    >
      {props.color}
    </div>
  );
}
