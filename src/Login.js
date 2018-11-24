import React, { Component } from "react";
import passwordHash from "password-hash";
import emailValidator from "email-validator";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };

    this.hash = "";
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let { email, password } = this.state;
      if (emailValidator.validate(email)) {
        //fetch
        fetch(`http://localhost:3001/users/login/${email}`)
          .then(response => response.json())
          .then(userObject => {
            if (userObject.password && userObject.role) {
              let isPasswordMatch = passwordHash.verify(
                password,
                userObject.password
              );
              if (isPasswordMatch) {
                console.log("Success " + userObject.email + " | " + userObject.role);
              } else {
                  //invalid password
                console.log("Wrong Pass");
              }
            } else {
              //invalid userName
              console.log("Wrong Email");
            }
          })
          .catch(err => {
            console.log(err);
          });

        this.setState({ errorMessage: "" });
      } else {
        this.setState({ errorMessage: "Enter a valid email" });
      }
    } else {
      this.setState({ errorMessage: "Fields are empty" });
    }
  };

  render() {
    return (
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div
                  className="alert alert-danger alert-dismissible"
                  style={
                    this.state.errorMessage
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <strong>OOPS!</strong> {this.state.errorMessage}
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <small>Remember Me</small>
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className="form-group text-center register">
                  <h2 className="text-center">Register</h2>
                  <button
                    type="submit"
                    className="btn btn-register center-block"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-8 login-sec">
              <img src="cloths.jpeg" alt="Chania" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
