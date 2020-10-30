import React from 'react';

const PadInputContainer = () => {
    return (
        <div>
          <div className="pad-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
          </div>
          <div className="board-row">
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
        </div>
    )
}
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
}

export default DesignPad;