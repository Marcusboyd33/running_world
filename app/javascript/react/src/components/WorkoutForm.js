import React from 'react';
import {Link} from 'react-router-dom'
class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0,
      tenths: 0,
      distance: 0,
      pace: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm() {
    this.setState({
      time: 0,
      minutes: 0,
      seconds: 0,
      tenths: 0,
      distance: 0,
      pace: 0
    })
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault()

    let totalTime = ((60000 * this.state.minutes) + (1000 * this.state.seconds) + (10 * this .state.tenths))

    const formPayload = {
      time: totalTime,
      distance: this.state.distance,
      pace: this.state.pace,
    }
    this.props.addWorkout(formPayload)
    this.clearForm()
  }

  render() {
    return (
      <div>
        <Link to={`/`}><button>Home</button></Link>
        <div className='form-container'>
          <h3>Enter your workout here</h3>
          <form onSubmit={this.handleSubmit}>
            <div className='time-container'>
              <span>Time: </span>
              <input
                type='number'
                pattern='[0-9]*'
                value={this.state.minutes.toString().padStart(2, "0")}
                onChange={this.handleChange}
                name='minutes'
                label='minutes'
              /><span>:</span>
              <input
                type='number'
                pattern='[0-9]*'
                value={this.state.seconds.toString().padStart(2, "0")}
                onChange={this.handleChange}
                name='seconds'
                label='seconds'
              /><span>.</span>
              <input
                type='number'
                pattern='[0-9]*'
                value={this.state.tenths.toString().padStart(2, "0")}
                onChange={this.handleChange}
                name='tenths'
                label='tenths'
              />
            </div>

            <div>
              {/* <span>Distance: </span> */}
              <input
                type='text'
                placeholder='DISTANCE in METERS'
                value={(this.state.distance === 0) ? '' : this.state.distance}
                onChange={this.handleChange}
                name='distance'
                label='distance'
              />
            </div>

            <div>
              {/* <span>Pace: </span> */}
              <input
                type='text'
                placeholder='PACE DISTANCE'
                value={(this.state.pace === 0) ? '' : this.state.pace}
                onChange={this.handleChange}
                name='pace'
                label='pace'
              />
            </div>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    )

  }
}
export default WorkoutForm;
