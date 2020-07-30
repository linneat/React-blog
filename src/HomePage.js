import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleNew from "./ArticleNew";

export default class HomePage extends Component {
  render() {
    return (
      <div className="appWrap">
        <div className="homePageWrap">
          <h1 className="heading">Posted Articles</h1>
          <Link to={"/articlenew"} className="buttonHomePage">
            <button className="buttonClass">Write new article</button>
          </Link>
        </div>
      </div>
    );
  }
}
