import React from "react"
import {Link} from "react-router-dom"
import TimeElapsed from './TimeElapsed'
const leftPad = (width, n) => {
  if ((n + '').length > width) {
	  return n;
  }
  const padding = new Array(width).join('0');
  return (padding + n).slice(-width);
};

const WorkoutTile = props => {
  return (

    <div className='workout-tile'>
      <div className='created-at-tile'>
        <Link to={`/workouts/${props.id}`}>{props.created_at}</Link>
      </div>
      <hr/>
      <div className='workout-info'>
        <p className='workout-info'>
          <Link to={`/workouts/${props.id}`}>{props.distance} meters @ </Link>
        </p>
        <span><TimeElapsed timeElapsed={props.time} /></span>
      </div>

    </div>
  )
}


export default WorkoutTile;
