import React from 'react'

const Countdown = props => {
  return (
    <div id='timer-label'>
      <h2>{props.state.onBreak ? 'Break' : 'Session'}</h2>
      <p id='time-left' style={(props.state.seconds < 60)? {color :'red'}: null}>
        {Math.floor(props.state.seconds / 60) < 10
          ? '0' + Math.floor(props.state.seconds / 60)
          : Math.floor(props.state.seconds / 60)}
        :
        {String(props.state.seconds % 60) < 10
          ? '0' + String(props.state.seconds % 60)
          : String(props.state.seconds % 60)}
      </p>
      <audio src='./bell.mp3' 
      controls 
      autoplay={props.state.seconds===0}
      muted/>
    </div>
  )
}
export default Countdown
