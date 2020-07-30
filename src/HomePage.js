import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleNew from "./ArticleNew";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      articles: undefined,
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/articles.json";

    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            articles: data,
          });
        },
        (error) => {
          this.setState({
            error: error.message,
          });
        }
      );
  }
  render() {
    if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else if (this.state.articles === undefined) {
      return (
        <div>
          <div>loading articles...</div>
        </div>
      );
    } else {
      return (
        <div className="appWrap">
          <div className="homePageWrap">
            <h1 className="heading">Posted Articles</h1>
            <ul>
              {this.state.articles.map((item, index) => {
                return (
                  <li key={index}>
                    {item.title} {item.text}
                  </li>
                );
              })}
            </ul>

            <Link to={"/articlenew"} className="buttonHomePage">
              <button className="buttonClass">Write new article</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}
