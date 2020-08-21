import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

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
        <div>
          <div className="homePageWrap">
          <span>
            <Link to="/">
              <i className="back"><FontAwesomeIcon icon={faAngleLeft} /></i>
            </Link>
            </span>
            <h1 className="heading">{this.state.article.title}</h1>
            <div className="articleShow">{this.state.article.text}</div>
          </div>
        </div>
      );
    }
  }
}
