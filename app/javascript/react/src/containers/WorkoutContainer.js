import React from 'react'
import WorkoutForm from '../components/WorkoutForm'

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
    this.addWorkout = this.addWorkout.bind(this)
  }
  addWorkout(formPayload) {
    fetch('/api/v1/workouts.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formPayload)
    })
  }

  componentDidMount() {
    this.addWorkout()
  }

  render() {
    let workoutForm = null
    workoutForm = <WorkoutForm addWorkout={this.addWorkout}/>

    return (
      <div>
        {workoutForm}
      </div>
    )
  }
}




export default WorkoutContainer;
