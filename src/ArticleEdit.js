import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import * as ReactBootStrap from "react-bootstrap";

export default class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: undefined,
      id: props.id,
      showArticle: false,
      errorMessage:'',
      username: props.location.state ? props.location.state.username : undefined,
      password: props.location.state ? props.location.state.password : undefined,
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
    if (this.state.article.title === "" || this.state.article.text === "") {
      this.setState({
        errorMessage: "Please fill out the text fields!",
      });
      return;
    }
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }
    let url = baseUrl + "/articles/" + this.state.id + ".json";

    let data = {
      article: this.state.article,
    };

    let base64 = require("base-64");
    let username = this.state.username;
    let password = this.state.password;
    const basic_auth = "Basic " + base64.encode(username + ":" + password);

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: basic_auth,
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
    if (this.state.username === undefined) {
      return;
    }
    
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
    if (this.state.username === undefined) {
      return <Redirect to={{
        pathname: "/login",
        state: { redirectUrl: "/edit-article/"+ this.state.id },
      }}
     />;
    } else if (this.state.showArticle) {
      return <Redirect to={"/show-article/" + this.state.id} />;
    } else if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else if (this.state.article === undefined) {
      return (
        <div className="loading">
          <ReactBootStrap.Spinner animation="border" />
          <div>loading article...</div>
        </div>
      );
    } else {
      return (
        <div className="articleNewPageWrap">
          <div>
            <Link to="/">
              <i className="back">
                <FontAwesomeIcon icon={faAngleLeft} />
              </i>
            </Link>
          </div>
          <h1 className="heading">Edit article</h1>
          <div className="newArticleWrap">
          <div className="errorMessage">{this.state.errorMessage}</div>
            <Form className="form">
              <Form.Group controlId="exampleForm.ControlInput1" className="formTopMargin">
                <Form.Label className="inputTitle"> Title:</Form.Label>

                <Form.Control
                  className="editInputTitle"
                  type="text"
                  placeholder="title"
                  value={this.state.article.title}
                  onChange={this.handleChangeTitle}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="textWrap">
                <Form.Label className="inputText">Text:</Form.Label>

                <Form.Control
                  className="editInputText"
                  as="textarea"
                  rows="7"
                  value={this.state.article.text}
                  onChange={this.handleChangeText}
                  placeholder="text"
                />
              </Form.Group>
              <Button variant="outline-success" className="saveButtonEdit" onClick={this.postArticle}>
                Save article
              </Button>
            </Form>
            <div className="postButton"></div>
          </div>
        </div>
      );
    }
  }
}
