import React from 'react'
import '../style/PadButton.css'

class PadButton extends React.Component {
  constructor(props) {
    super(props)
    // set the initial background color from props
    this.state = {
      bgColor: this.props.bgColor,
      editMode: this.props.editMode
    }
  }

  componentDidMount() {
   console.log(this.state.editMode)
  }

  // set the drag & drop data to the current bgColor
  onDrag = e => {
    console.log(this.state.bgColor)
    console.log(this.state.editMode)
    e.dataTransfer.setData('bgColor', this.state.bgColor)
  }

  render() {
    
      return (
        <div
          className='PadButton'
          draggable='true'
          // set background color to state
          style={{ backgroundColor: this.state.bgColor }}
          // event listener for drag & drop
          onDragStart={this.onDrag}>
         
        </div>
      )
    
    
  }
}

export default PadButton