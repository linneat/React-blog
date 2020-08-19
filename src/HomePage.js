import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
        <div className="homePageWrap" >
          <h1 className="heading">Posted Articles</h1>
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
                        <button className="buttonInWrap">
                          <Link to={"/edit-article/" + item.id}>edit</Link>
                        </button>
                      </span>
                      <span>
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
          <Link to={"/new-article"} className="linkHomePage">
            <Button variant="outline-success" className="buttonHomePage">
              Write new article
            </Button>
          </Link>
        </div>
      );
    }
  }
}
