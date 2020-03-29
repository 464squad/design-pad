import React from "react";
import styles from "../css/PadInput.module.css";
import Input from "./Input";

export default class PadInput extends React.Component {
  render() {
    return (
      <div className={styles.PadInput}>
        <Input edit={this.props.edit} color="red" />
        <Input edit={this.props.edit} color="green" />
        <Input edit={this.props.edit} color="blue" />
        <Input edit={this.props.edit} color="yellow" />
        <Input edit={this.props.edit} color="orange" />
        <Input edit={this.props.edit} color="purple" />
        <Input edit={this.props.edit} color="pink" />
        <Input edit={this.props.edit} color="gray" />
      </div>
    );
  }
}
