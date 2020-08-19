import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      articles: undefined,
      showArticle: undefined,
      id: undefined,
    };
  }

  delete(id) {
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }
    let url = baseUrl + "/articles/" + id + ".json";

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      let articleList = this.state.articles.slice();
      let articlesUpdate = articleList.filter((article) => article.id !== id);
      this.setState({
        articles: articlesUpdate,
      });
    });
  }

  componentDidMount() {
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }
    let url = baseUrl + "/articles.json";

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
        <div className="homePageWrap">
          <h1 className="heading">Posted Articles</h1>
          <ul>
            {this.state.articles.map((item, index) => {
              return (
                <li key={index}>
                  {item.title} {item.text}{" "}
                  <span>
                    <Link to={"/show-article/" + item.id}>show article</Link>
                  </span>
                  <span></span>
                  <span>
                    <Link to={"/edit-article/" + item.id}>edit article</Link>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        this.delete(item.id);
                      }}
                    >
                      delete article
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>

          <Link to={"/new-article"} className="buttonHomePage">
            <button className="buttonClass">Write new article</button>
          </Link>
        </div>
      );
    }
  }
}
