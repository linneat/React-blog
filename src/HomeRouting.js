import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ArticleNew from "./ArticleNew";
import ArticleShow from "./ArticleShow";
import ArticleEdit from "./ArticleEdit";
import LogIn from "./LogIn";

export default class HomeRouting extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/new-article" exact component={ArticleNew} />
            <Route path="/show-article/:id" render={(props) => <ArticleShow id={props.match.params.id} />}></Route>
            <Route path="/edit-article/:id" render={(props) => <ArticleEdit id={props.match.params.id} />}></Route>
            <Route path="/login" exact component={LogIn}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
