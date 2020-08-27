import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import loadable from '@components/loadable';

const App = loadable(() => import(/* webpackChunkName: "app" */ '@pages/App'));
const Home = loadable(() => import(/* webpackChunkName: "home" */ '@pages/Home'));
const About = loadable(() => import(/* webpackChunkName: "about" */ '@pages/About'));
const Dashboard = loadable(() => import(/* webpackChunkName: "dashboard" */ '@pages/Dashboard'));

export default function BasicExample() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </App>
    </Router>
  );
}
