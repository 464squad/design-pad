import React from "react";
import styles from "../css/PadInput.module.css";
import Input from "./Input";

export default class PadInput extends React.Component {
  render() {
    return (
      <div className={styles.PadInput}>
        <Input color="red" />
        <Input color="green" />
        <Input color="blue" />
        <Input color="yellow" />
        <Input color="orange" />
        <Input color="purple" />
        <Input color="pink" />
        <Input color="gray" />
      </div>
    );
  }
}
