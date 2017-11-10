import React from 'react'
import TimeElapsed from './TimeElapsed'
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown-now'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: 0,
      workoutId: props.match.params.workout_id
    };

    this.update = this.update.bind(this)
    this.reset = this.reset.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const zero = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + zero});
    this.startTime = Date.now();
  }

  fetchCurrentWorkout() {
    fetch(`/api/v1/workouts/${workout}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        workout: data
      })
    })
  }
  render() {
    const {isRunning, timeElapsed} = this.state;
    return (
      <div>
        <Link to={`/`}><button>Home</button></Link>

        <div className='stopwatch'>
          <Countdown id="countdown" date={Date.now() + 6000000} />
          <hr/>
          <TimeElapsed id="timer"  timeElapsed={timeElapsed} />
          <button className={isRunning || timeElapsed ?  'strstp-btn dead' : 'strstp-btn'} onClick={this.toggle}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={isRunning ? null :this.reset}
            disabled={isRunning && !timeElapsed}
            className={isRunning ? 'strstp-btn' : 'strstp-btn'}
            >
              { !timeElapsed ? 'Reset' : 'Reset'}
            </button>
          </div>
      </div>
    );
  }
}


export default Stopwatch
