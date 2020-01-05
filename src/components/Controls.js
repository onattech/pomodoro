import React from 'react'

const Controls = props => {
  return (
    <div className='controls'>
    <span id='start_stop' onClick={props.startCount} name='hello'>
      <i id='play' className='fas fa-play'></i>
      <i id='pause' className='fas fa-pause'></i>
    </span>
    <i
      id='reset'
      className='fas fa-sync-alt'
      onClick={props.resetCount}
    ></i>
  </div>
  )
}

export default Controls