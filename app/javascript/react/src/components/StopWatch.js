import React from 'react'
import TimeElapsed from './TimeElapsed'


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    ["update", "reset", "toggle"].forEach((method) => {
    	this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      // lapTimes: [],
      timeElapsed: 0,
    };
  }
  toggle() {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
  // lap() {
  //   const {lapTimes, timeElapsed} = this.state;
  //   this.setState({lapTimes: lapTimes.concat(timeElapsed)});
  // }
  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  render() {
    const {isRunning, timeElapsed} = this.state;
    return (
      <div className='stopwatch'>
        <TimeElapsed id="timer"  timeElapsed={timeElapsed} />
        <button className={isRunning || timeElapsed ?  'strstp-btn' : 'strstp-btn'} onClick={this.toggle}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={isRunning ? null :this.reset}
          // disabled={isRunning && !timeElapsed}
          className={isRunning ? 'strstp-btn' : 'strstp-btn'}
         >
          { !timeElapsed ? 'Reset' : 'Reset'}
        </button>
      </div>
    );
  }
}


export default Stopwatch
