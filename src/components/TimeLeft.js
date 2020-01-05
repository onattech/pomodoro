import React from 'react'

const TimeLeft = (props) => {
  return (
    <div id='timer-label'>
    <h2>Time Left</h2>
    <p id='time-left'>
      {/* {props.state.session}:{String(props.state.seconds).slice(-2)} */}
  {Math.floor(props.state.seconds / 60)}
  :{String(props.state.seconds % 60)}
    </p>
  </div>
  )
}

export default TimeLeft