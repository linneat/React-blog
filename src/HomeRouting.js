import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";



export default class HomeRouting extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />           
          </Switch>
        </Router>
      </div>
    );
  }
}
