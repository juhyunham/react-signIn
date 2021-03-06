import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

const App = (props) => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
        </Switch>
      </Router>
  )
};

export default App;