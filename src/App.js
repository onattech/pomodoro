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
    session: 25,
    seconds: 1500,
    play: false
  }

  startCount = () => {
    let countdown = null
    
    if (this.state.play === false){
      this.setState({ play: true })
      countdown = setInterval(() => {
        if (this.state.play === true && this.state.seconds > 0) {
          this.setState({ seconds: this.state.seconds - 1 })
        }
      }, 1000)
    } else {
      clearInterval(countdown)
      this.setState({ play: false })
    }
  }

  setCounter = ev => {
    switch (ev.currentTarget.id) {
      case 'break-increment':
        this.state.break < 60 &&
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
        this.state.session < 60 &&
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
    this.setState({ break: 5, session: 25, seconds: 1500, play: false })
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
