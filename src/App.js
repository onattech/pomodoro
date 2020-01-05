import React from 'react'
import './App.css'
import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'

class App extends React.Component {
  state = {
    break: 5,
    session: 25,
    seconds: '00'
  }

  startCount = () => {
    let timeout = 1000
    for (let i = 59; i > -1; i--) {
      setTimeout(() => this.setState({ seconds: '0' + String(i) }), timeout)
      timeout += 1000
    }
    this.setState({session: this.state.session - 1})
  }

  setCount = ev => {
    switch (ev.currentTarget.id) {
      case 'break-increment':
        this.setState({ break: this.state.break + 1 })
        break
      case 'break-decrement':
        this.state.break > 1 && 
        this.setState({ break: this.state.break - 1 })
        break
      case 'session-increment':
        this.setState({ session: this.state.session + 1 })
        break
      case 'session-decrement':
        this.state.session > 1 && 
        this.setState({ session: this.state.session - 1 })
        break
      default:
        break
    }
  }

  resetCount = () => {
    this.setState({ break: 5, session: 25 })
  }

  render() {
    return (
      <div id='wrapper'>
        <h1 id='title'>Pomodoro Clock</h1>
        <Break state={this.state} setCount={this.setCount} />
        <Session state={this.state} setCount={this.setCount} />
        <TimeLeft state={this.state} />
        <div className='controls'>
          <span id='start_stop' onClick={this.startCount} name='hello'>
            <i id='play' className='fas fa-play'></i>
            <i id='pause' className='fas fa-pause'></i>
          </span>
          <i
            id='reset'
            className='fas fa-sync-alt'
            onClick={this.resetCount}
          ></i>
        </div>
      </div>
    )
  }
}

export default App
