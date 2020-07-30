import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ArticleNew from "./ArticleNew";



export default class HomeRouting extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />    
            <Route path="/articlenew" exact component={ArticleNew} />       
          </Switch>
        </Router>
      </div>
    );
  }
}
