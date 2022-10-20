import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import Teams from './Teams';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/teams'>
            <Teams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
