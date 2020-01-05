import React from 'react'

const Break = props => {
  return (
    <div id='break-label'>
      <h2>Break Length</h2>
      <i
        id='break-increment'
        className='fas fa-arrow-up arrow'
        onClick={props.setCounter}
      ></i>
      <span id='break-length'>{props.state.break}</span>
      <i
        id='break-decrement'
        className='fas fa-arrow-down arrow'
        onClick={props.setCounter}
      ></i>
    </div>
  )
}

export default Break
