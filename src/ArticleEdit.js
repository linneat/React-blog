import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Button} from "react-bootstrap";

export default class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: undefined,
      id: props.id,
      showArticle: false,
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.postArticle = this.postArticle.bind(this);
  }

  handleChangeTitle(event) {
    let articleEdit = this.state.article;
    articleEdit.title = event.target.value;
    this.setState({
      article: articleEdit,
    });
  }

  handleChangeText(event) {
    let articleEdit = this.state.article;
    articleEdit.text = event.target.value;
    this.setState({
      article: articleEdit,
    });
  }

  postArticle() {
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }
    let url = baseUrl + "/articles/" + this.state.id + ".json";

    let data = {
      article: this.state.article,
    };

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          showArticle: true,
        });
      });
  }

  componentDidMount() {
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }

    let url = baseUrl + "/articles/" + this.state.id + ".json";

    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            article: data,
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
    if (this.state.showArticle) {
      return <Redirect to={"/show-article/" + this.state.id} />;
    } else if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else if (this.state.article === undefined) {
      return (
        <div>
          <div>loading article...</div>
        </div>
      );
    } else {
      return (
        <div className="articleNewPageWrap">
          <h1 className="heading">Edit article</h1>
          <div className="newArticleWrap">
            <label className="inputLabel">
              Title: {' '}
              <input
                className="editInput"
                type="text"
                name="title"
                value={this.state.article.title}
                onChange={this.handleChangeTitle}
                placeholder="title"
              />
            </label>
            <label className="inputLabel">
              Text:{' '}
              <input
                className="editInput"
                type="text"
                name="text"
                value={this.state.article.text}
                onChange={this.handleChangeText}
                placeholder="text"
              />
            </label>
            <div className="postButton">
              <Button variant="outline-success" className="saveButton" onClick={this.postArticle}>
                Save article
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
}
