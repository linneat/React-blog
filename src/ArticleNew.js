import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }

    let url = baseUrl + "/articles.json";

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
      return <Redirect to={"/show-article/" + this.state.id} />;
    } else {
      return (
        <div className="articleNewPageWrap">
          <h1 className="heading">New article</h1>
          <div className="newArticleWrap">
            <Form className="form">
              <Form.Group controlId="exampleForm.ControlInput1" className="formTopMargin">
                <Form.Label className="inputTitle"> Title:</Form.Label>
                <Form.Control
                  className="editInputTitle"
                  type="text"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="textWrap">
                <Form.Label className="inputText">Text:</Form.Label>

                <Form.Control
                  className="editInputText"
                  as="textarea"
                  rows="7"
                  value={this.state.text}
                  onChange={this.handleChangeText}
                  placeholder="text"
                />
              </Form.Group>
            
                <Button variant="outline-success" className="saveButtonCreate" onClick={this.postArticle}>
                  Create article
                </Button>
       
            </Form>
          </div>
        </div>
      );
    }
  }
}
