import React from 'react'

const Session = props => {
  return (
    <div id='session-label'>
      <h2>Session Length</h2>
      <i
        id='session-increment'
        className='fas fa-arrow-up arrow'
        onClick={props.setCounter}
      ></i>
      <span id='session-length'>{props.state.session}</span>
      <i
        id='session-decrement'
        className='fas fa-arrow-down arrow'
        onClick={props.setCounter}
      ></i>
    </div>
  )
}

export default Session
