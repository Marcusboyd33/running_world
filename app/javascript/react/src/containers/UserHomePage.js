import React, { Component } from "react"
import WorkoutTile from "../components/WorkoutTile"
import WorkoutForm from "../components/WorkoutForm"
import {Link } from 'react-router-dom';
class UserHomepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      workouts: [],
      workoutId: props.match.params.workout_id
    }
    // this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
    this.fetchWorkout = this.fetchWorkout.bind(this)
    // this.addWorkout= this.addWorkout.bind(this)
  }
  // fetchCurrentUser() {
  //   fetch("/api/v1/current-user", {
  //     credentials: "same-origin"
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       currentUser: data
  //     })
  //   })
  // }

  fetchWorkout() {
    fetch(`/api/v1/workouts`, {
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        workouts: data
      })
    })
  }

  // addWorkout(formPayload) {
  //
  //   fetch('/api/v1/workouts.json', {
  //     credentials: 'same-origin',
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(formPayload)
  //   })
  //   .then(() => {
  //     this.fetchWorkout()
  //   })
  // }

  componentDidMount() {
    this.fetchWorkout()
  }

  render(){
    let workouts = this.state.workouts.map(workout =>
    <WorkoutTile
      id={workout.id}
      key={workout.id}
      data={workout}
      createdAt={workout.created_at}
      distance={workout.distance}
      time={workout.time}
      pace={workout.pace}
     />
   )

    return (
      <div>
        <h3>Your Workouts</h3>
        <Link to={"/workouts/new"}><button className='create-button'>Create New</button></Link>
        {workouts}
      </div>
    )
  }
}

export default UserHomepage;
