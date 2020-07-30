import React, { Component } from "react";

export default class ArticleShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      article: undefined,
      id: props.id,
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/articles/" + this.state.id + ".json";

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
    if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else if (this.state.article === undefined) {
      return (
        <div>
          <div>loading article...</div>
        </div>
      );
    } else {
      return (
        <div className="appWrap">
          <div className="homePageWrap">
            <h1 className="heading">{this.state.article.title}</h1>
            <div>{this.state.article.text}</div>
          </div>
        </div>
      );
    }
  }
}
