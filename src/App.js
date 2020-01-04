import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    break: 5,
    session: 25
  }
  render() {
    return (
      <div id='wrapper'>
        <h1 id='title'>Pomodoro Clock</h1>
        <div id='break-label'>
          <h2>Break Length</h2>
          <i id='break-increment' className='fas fa-arrow-up'></i>
          <span id='break-length'>{this.state.break}</span>
          <i id='break-decrement' className='fas fa-arrow-down'></i>
        </div>
        <div id='session-label'>
          <h2>Session Length</h2>
          <i id='session-increment' className='fas fa-arrow-up'></i>
          <span id='session-length'>{this.state.session}</span>
          <i id='session-decrement' className='fas fa-arrow-down'></i>
        </div>
        <div id="timer-label">
          <h2>Session</h2>
          <p id="time-left">25:00</p>
        </div>
      </div>
    )
  }
}

export default App
