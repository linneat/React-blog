import React, { Component } from "react";

export default class ArticleNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      post: false,
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.postArticle = this.postArticle.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
    console.log(this.state.title);
  }

  handleChangeText(event){
      this.setState({
        text: event.target.value,
      });
  }

  postArticle() {
    this.setState({post: true });
  }
  render() {
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
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
