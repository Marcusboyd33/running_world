import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WorkoutForm from './components/WorkoutForm';
import UserHomepage from './containers/UserHomepage';
import Stopwatch from './components/Stopwatch';
import WorkoutContainer from './containers/WorkoutContainer';

const App = props => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={UserHomepage}/>
          <Route exact path='/workouts/new' component={WorkoutContainer}/>
          <Route exact path='/workouts/:workoutId' component={Stopwatch}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
