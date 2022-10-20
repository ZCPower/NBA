import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import Teams from './Teams';
import Nav from './Nav';
import SingleTeam from './SingleTeam';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/teams'>
            <Teams />
          </Route>
          <Route path='/teams/:teamId'>
            <SingleTeam />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
