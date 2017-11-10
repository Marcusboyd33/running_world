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
    this.fetchWorkout = this.fetchWorkout.bind(this)
  }

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
