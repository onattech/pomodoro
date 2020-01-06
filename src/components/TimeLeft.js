import React from 'react'

const TimeLeft = props => {
  return (
    <div id='timer-label'>
      <h2>Time Left</h2>
      <p id='time-left'>
        {Math.floor(props.state.seconds / 60) < 10 
        ? '0' + Math.floor(props.state.seconds / 60):
        Math.floor(props.state.seconds / 60)}:
        {String(props.state.seconds % 60) < 10
          ? '0' + String(props.state.seconds % 60)
          : String(props.state.seconds % 60)}
      </p>
    </div>
  )
}

export default TimeLeft
