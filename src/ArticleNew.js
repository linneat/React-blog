import React, { Component } from "react";
import { Redirect } from "react-router";

export default class ArticleNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      id: undefined,
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.postArticle = this.postArticle.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  postArticle() {
    let url = "http://localhost:3000/articles.json";
    let data = {
      article: {
        title: this.state.title,
        text: this.state.text,
      },
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          id: response.id,
        });
      });
  }
  render() {
    if (this.state.id !== undefined) {
      return (<Redirect to={"/show-article/" + this.state.id} />);
    } else {
      return (
        <div className="articleNewPageWrap">
          <h1 className="heading">New article</h1>
          <div className="newArticleWrap">
            <label className="inputLabel">
              Title:
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChangeTitle}
                placeholder="title"
              />
            </label>
            <label className="inputLabel">
              Text:
              <input
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChangeText}
                placeholder="text"
              />
            </label>
            <div className="postButton">
              <button className="button" onClick={this.postArticle}>
                Create article
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
