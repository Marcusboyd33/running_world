import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import UserHomepage from './containers/UserHomepage';
import {Route, Swith } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';

const App = props => {
  return(
    <div>
      <Stopwatch />
      {/* <UserHomepage /> */}
    </div>
  )
}

export default App
