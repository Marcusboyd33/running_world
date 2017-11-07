import React from "react"

const WorkoutTile = props => {

  return (
    <div className='workout-tile'>
      <div className='created-at-tile'>
        {props.created_at}
      </div>
      <hr/>
      <div className='workout-info'>
        <p className='workout-info'>{props.reps} x {props.distance} @ {props.time} seconds
         with {props.rest} minutes rest</p>
      </div>

    </div>
  )
}


export default WorkoutTile;
