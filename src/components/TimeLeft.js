import React from 'react'

const TimeLeft = (props) => {
  return (
    <div id='timer-label'>
    <h2>Session</h2>
    <p id='time-left'>
      {props.state.session}:{props.state.seconds.slice(-2)}
    </p>
  </div>
  )
}

export default TimeLeft