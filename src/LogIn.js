import React, { Component } from "react";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: undefined,
      redirectUrl: props.location.state ? props.location.state.redirectUrl : "/",
      error: "",
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  logIn() {
    let baseUrl = "https://boiling-peak-38811.herokuapp.com";
    if (process.env.REACT_APP_API_URL !== undefined) {
      baseUrl = process.env.REACT_APP_API_URL.trim();
    }

    let url = baseUrl + "/articles/new";

    let base64 = require("base-64");
    let username = this.state.username;
    let password = this.state.password;
    const basic_auth = "Basic " + base64.encode(username + ":" + password);

    fetch(url, {
      headers: {
        Authorization: basic_auth,
      },
    }).then(
      (data) => {
        if (data.status === 401) {
          this.setState({
            error: "username and or password are wrong please try again",
          });
        } else {
          this.setState({
            redirect: true,
          });
        }
      },
      (error) => {
        this.setState({
          error: error.message,
        });
      }
    );
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectUrl,
            state: { username: this.state.username, password: this.state.password },
          }}
        />
      );
    } else {
      return (
        <div>
          <div>
            <Link to="/">
              <i className="back">
                <FontAwesomeIcon icon={faAngleLeft} />
              </i>
            </Link>
          </div>
          <div className="newArticleWrap">
            <div>{this.state.error}</div>
            <Form className="form">
              <Form.Group controlId="exampleForm.ControlInput1" className="formTopMargin">
                <Form.Label className="inputTitle"> Username:</Form.Label>
                <Form.Control
                  className="editInputTitle"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="textWrap">
                <Form.Label className="inputText">Password:</Form.Label>

                <Form.Control
                  className="editInputText"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="outline-success" className="saveButtonCreate" onClick={this.logIn}>
                <div className="centerTextButton">Log in</div>
              </Button>
            </Form>
          </div>
        </div>
      );
    }
  }
}
