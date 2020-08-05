import React, { Component } from "react";

export default class ArticleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      article: undefined,
      id: props.id,
    };
  }

  render() {
    return (
      <div>
        <div>EHLLOOGf {this.state.id}</div>
      </div>
    );
  }
}
