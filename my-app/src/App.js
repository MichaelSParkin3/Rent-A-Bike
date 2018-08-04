import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Landing from './Components/Landing';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Redirect from={process.env.PUBLIC_URL + '/'} to="landing" />
          <Route
            path={process.env.PUBLIC_URL + '/landing'}
            render={() => <Landing ref={this.child} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
