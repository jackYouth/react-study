import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import loadable from "react-loadable";

import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function BasicExample() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/">
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
