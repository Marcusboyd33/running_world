import React, { Component } from "react"
import WorkoutTile from "../components/WorkoutTile"
import WorkoutForm from "../components/WorkoutForm"

class UserHomepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      workouts: []
    }
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
    this.fetchWorkout = this.fetchWorkout.bind(this)
    // this.addWorkout= this.addWorkout.bind(this)
  }
  fetchCurrentUser() {
    fetch("/api/v1/current-user")
    .then(response => response.json())
    .then(data => {
      this.setState({
        currentUser: data
      })
    })
  }




  fetchWorkout() {
    fetch("/api/v1/workouts")
    .then(response => response.json())
    .then(data => {
      this.setState({
        workouts: data.sort((a,b) => a.created_at < b.created_at)
      })
    })
  }

  // addWorkout(formPayload) {
  //   let payload = {
  //     time: formPayload.time,
  //     distance: formPayload.distance,
  //     rest: formPayload.rest,
  //     reps: formPayload.reps,
  //     intervaldistance: formPayload.intervaldistance,
  //   }
  //   fetch('/api/v1/workouts.json', {
  //     credentials: 'same-origin',
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: payload
  //   })
  //   .then(() => {
  //     this.fetchWorkout()
  //   })
  // }

  componentDidMount() {
    this.fetchCurrentUser()
    this.fetchWorkout()
    // this.addWorkout()
  }

  render(){
    let workouts = this.state.workouts.map(workout =>
    <WorkoutTile
      id={workout.id}
      key={workout.id}
      data={workout}
      createdAt={workout.created_at}
      reps={workout.reps}
      distance={workout.distance}
      time={workout.time}
      racetype={workout.racetype}
      rest={workout.rest}
      intervaldistance={workout.intervaldistance}
     />
   )

  //  let workoutForm = null
  //  workoutForm = <WorkoutForm addWorkout={this.addWorkout}/>
    return (
      <div>
        {/* {workoutForm} */}
        {workouts}
      </div>
    )
  }
}

export default UserHomepage;
