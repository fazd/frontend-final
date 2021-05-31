import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Place from '../pages/Place/Place';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/place/:id">
          <Place />
        </Route>

      </Switch>
    </Router>
  );
};

export default Routes;