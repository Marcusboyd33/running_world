import React from 'react';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      racetype: "",
      time: 0,
      minutes: 0,
      seconds: 0,
      tenths: 0,
      distance: 0,
      rest: 0,
      reps: 0,
      intervaldistance: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault()

    let totalTime = ((6000 * this.state.minutes) + (1000 * this.state.seconds) + (100 * this .state.tenths))

    const formPayload = {
      racetype: this.state.racetype,
      time: totalTime,
      distance: this.state.distance,
      rest: this.state.rest,
      reps: this.state.reps,
      intervaldistance: this.state.intervaldistance,
    }
    this.props.addWorkout(formPayload)
    this.clearForm()
  }

  render() {
    return (
      <div>
        Hello
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>Time: </span>
            <input
              type='number'
              pattern='[0-9]*'
              value={this.state.minutes.toString().padStart(2, "0")}
              onChange={this.handleChange}
              name='minutes'
              label='minutes'
            />:
            <input
              type='number'
              pattern='[0-9]*'
              value={this.state.seconds.toString().padStart(2, "0")}
              onChange={this.handleChange}
              name='seconds'
              label='seconds'
            />.
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
            <span>Type: </span>
            <input
              type='text'
              value={this.state.racetype}
              onChange={this.handleChange}
              name='racetype'
              label='racetype'
            />
          </div>
          <div>
            <span>Distance: </span>
            <input
              type='text'
              value={this.state.distance}
              onChange={this.handleChange}
              name='distance'
              label='distance'
            />
          </div>
          <div>
            <span>Reps: </span>
            <input
              type='number'
              value={this.state.reps}
              onChange={this.handleChange}
              name='reps'
              label='reps'
            />
          </div>
          <div>
            <span>Rest: </span>
            <input
              type='text'
              value={this.state.reps}
              onChange={this.handleChange}
              name='rest'
              label='rest'
            />
          </div>
          <div>
            <span>Interval: </span>
            <input
              type='text'
              value={this.state.intervaldistance}
              onChange={this.handleChange}
              name='intervaldistance'
              label='intervaldistance'
            />
          </div>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )

  }
}
export default WorkoutForm;
