import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      articles: undefined,
      showArticle: undefined,
      id: undefined,
      username: props.location.state ? props.location.state.username : undefined,
      password: props.location.state ? props.location.state.password : undefined,
      redirect: undefined,
    };
    this.writeNewArticle = this.writeNewArticle.bind(this);
  }

  delete(id) {
    if (this.state.username === undefined || this.state.password === undefined) {
      this.setState({
        redirect: "/login",
      });
      return;
    }

    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }
    let url = baseUrl + "/articles/" + id + ".json";

    let base64 = require("base-64");
    let username = this.state.username;
    let password = this.state.password;
    const basic_auth = "Basic " + base64.encode(username + ":" + password);

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": basic_auth
      },
    }).then((response) => {
      let articleList = this.state.articles.slice();
      let articlesUpdate = articleList.filter((article) => article.id !== id);
      this.setState({
        articles: articlesUpdate,
      });
    });
  }

  editArticle(articleId) {
    if (this.state.username && this.state.password) {
      this.setState({
        redirect: "/edit-article/" + articleId,
      });
    } else {
      this.setState({
        redirect: "/login",
      });
    }
  }

  writeNewArticle() {
    if (this.state.username && this.state.password) {
      this.setState({
        redirect: "/new-article",
      });
    } else {
      this.setState({
        redirect: "/login",
      });
    }
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
        <div className="loading">
          <ReactBootStrap.Spinner animation="border" />
          <div>loading articles...</div>
        </div>
      );
    } else if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            state: { username: this.state.username, password: this.state.password },
          }}
        />
      );
    } else {
      return (
        <div className="homePageWrap">
          <h1 className="headingHomePage">Posted Articles</h1>
          <div className="listWrap">
            <ul className="list">
              {this.state.articles.map((item, index) => {
                return (
                  <li key={index} className="listItem">
                    <span className="itemTitle">{item.title} </span>

                    <span className="buttonsWrap">
                      <span className="linkInWrap">
                        <button className="buttonInWrap">
                          <Link to={"/show-article/" + item.id}>show</Link>
                        </button>
                      </span>
                      <span className="linkInWrap">
                        <button className="buttonInWrap" onClick={() => this.editArticle(item.id)}>
                          edit
                        </button>
                      </span>
                      <span className="linkInWrap">
                        <button
                          className="buttonInWrap"
                          onClick={() => {
                            this.delete(item.id);
                          }}
                        >
                          delete
                        </button>
                      </span>
                    </span>
                    <hr className="line"></hr>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="linkHomePage">
            <Button variant="outline-success" className="buttonHomePage" onClick={this.writeNewArticle}>
              Write new article
            </Button>
          </div>
        </div>
      );
    }
  }
}
