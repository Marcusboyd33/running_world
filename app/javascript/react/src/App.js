import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import UserHomepage from './containers/UserHomepage';
import {Route, Swith } from 'react-router-dom';

const App = props => {
  return(
    <div>

      <UserHomepage />
    </div>
  )
}

export default App
