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
import Event from '../pages/Event/Event';
import Discover from '../pages/Discover/Discover';
import ListCard from '../pages/List-card/List-card';


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
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/places/all">
          <ListCard type="lugares" />
        </Route>
        <Route path="/events/all">
          <ListCard type="eventos" />
        </Route>

        <Route path="/place/:id">
          <Place />
        </Route>

        <Route path="/event/:id">
          <Event />
        </Route>

      </Switch>
    </Router>
  );
};

export default Routes;