import React from 'react'
import WorkoutForm from '../components/WorkoutForm'

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
    this.fetchWorkouts = this.fetchWorkouts
  }
}




export default WorkoutContainer;
