import React from "react";
import styles from "../css/PadInput.module.css";

export default class PadInput extends React.Component {
  render() {
    return (
      <div className={styles.PadInput}>
        <div className={styles.input} draggable="true">
          1
        </div>
        <div className={styles.input} draggable="true">
          2
        </div>
        <div className={styles.input} draggable="true">
          3
        </div>
        <div className={styles.input} draggable="true">
          4
        </div>
        <div className={styles.input} draggable="true">
          5
        </div>
        <div className={styles.input} draggable="true">
          6
        </div>
        <div className={styles.input} draggable="true">
          7
        </div>
        <div className={styles.input} draggable="true">
          8
        </div>
      </div>
    );
  }
}
