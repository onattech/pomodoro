import React from 'react'
import './App.css'
import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'
import Controls from './components/Controls'

class App extends React.Component {
  state = {
    break: 5,
    breakSeconds: 0,
    session: 5,
    seconds: 300,
    play: true
  }

  startCount = () => {
    let timeout = 1000
    for (let i = 59; i > -1; i--) {
      setTimeout(() => this.setState({ seconds: this.state.seconds - 1 }), timeout)
      timeout += 1000
    }
    this.setState({ session: this.state.session - 1 })
  }

  setCounter = ev => {
    switch (ev.currentTarget.id) {
      case 'break-increment':
        this.setState({
          break: this.state.break + 1,
          breakSeconds: this.state.break * 60
        })
        break
      case 'break-decrement':
        this.state.break > 1 &&
          this.setState({
            break: this.state.break - 1,
            breakSeconds: this.state.break * 60
          })
        break
      case 'session-increment':
        this.setState({
          session: this.state.session + 1,
          seconds: (this.state.session + 1) * 60
        })
        break
      case 'session-decrement':
        this.state.session > 1 &&
          this.setState({
            session: this.state.session - 1,
            seconds: (this.state.session - 1) * 60
          })
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
        <Break state={this.state} setCounter={this.setCounter} />
        <Session state={this.state} setCounter={this.setCounter} />
        <TimeLeft state={this.state} />
        <Controls startCount={this.startCount} resetCount={this.resetCount} />
      </div>
    )
  }
}

export default App
