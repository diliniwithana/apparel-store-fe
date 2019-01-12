import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import passwordHash from "password-hash";
import emailValidator from "email-validator";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      primaryContact: "",
      errorMessage: "",
      role: "customer",
      preference: "",
      shopContact: "",
      shopName: "",
      successMessage: "",
      redirectNow: false
    };

    this.hash = "";
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleShopContactChange = this.handleShopContactChange.bind(this);
    this.handleShopNameChange = this.handleShopNameChange.bind(this);
    this.handleCustomerPrefChange = this.handleCustomerPrefChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  validateForm() {
    let baseValidation =
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.primaryContact.length > 0;

    if (this.state.role === "customer") {
      return baseValidation && this.state.preference;
    } else if (this.state.role === "retailer") {
      return baseValidation && this.state.shopContact && this.state.shopName;
    }
    return baseValidation;
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleContactChange(event) {
    this.setState({ primaryContact: event.target.value });
  }

  handleRadioChange(event) {
    this.setState({ role: event.target.value });
  }

  handleShopContactChange(event) {
    this.setState({ shopContact: event.target.value });
  }

  handleShopNameChange(event) {
    this.setState({ shopName: event.target.value });
  }

  handleCustomerPrefChange(event) {
    this.setState({ preference: event.target.value });
  }

  handleRedirect() {
    if (this.state.successMessage) {
      setTimeout(function() {
        console.log("Adddd");
        this.setState({ redirectNow: true });
      }, 1500);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let {
        email,
        primaryContact,
        role,
        preference,
        shopContact,
        shopName
      } = this.state;
      if (emailValidator.validate(email)) {
        let endpoint = "";
        let payload = {};
        // hash the password
        let password = passwordHash.generate(this.state.password);
        if (role === "customer") {
          endpoint = "addCustomer";
          payload = { email, primaryContact, role, password, preference };
        } else if (role === "retailer") {
          endpoint = "addRetailer";
          payload = {
            email,
            primaryContact,
            role,
            password,
            shopName,
            shopContact
          };
        }
        console.log("JSON ---------" + JSON.stringify(payload));
        //fetch
        fetch(`http://localhost:3001/users/${endpoint}`, {
          method: "post",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(payload)
        })
          .then(response => response.json())
          .then(userObject => {
            console.log("SUCCESS: " + userObject);
            if (userObject) {
              this.setState({ successMessage: userObject });
            } else {
              this.setState({ errorMessage: "Failed to add user" });
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
    if (this.state.successMessage && !this.state.redirectNow) {
      setTimeout(function() {
        this.setState({ redirectNow: true });
      }.bind(this), 1500);
    }
    if (this.state.redirectNow) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Register Now</h2>
                <form className="login-form">
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userRole"
                      id="customer"
                      value="customer"
                      checked={this.state.role === "customer"}
                      onChange={this.handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Customer
                    </label>
                  </div>

                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userRole"
                      id="retailer"
                      value="retailer"
                      checked={this.state.role === "retailer"}
                      onChange={this.handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Retailer
                    </label>
                  </div>
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
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputContact"
                      className="text-uppercase"
                    >
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={this.handleContactChange}
                    />
                  </div>
                  {this.state.role === "customer" && (
                    <div className="form-group">
                      <label
                        htmlFor="exampleShirtPreference"
                        className="text-uppercase"
                      >
                        Shirt Preference
                      </label>
                      <select
                        className="custom-select"
                        onChange={this.handleCustomerPrefChange}
                      >
                        <option value="">Fitness level</option>
                        <option value="slim">Slim</option>
                        <option value="normal">Normal</option>
                        <option value="comfort">Comfot</option>
                      </select>
                    </div>
                  )}

                  {this.state.role === "retailer" && (
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="exampleShopName"
                          className="text-uppercase"
                        >
                          Shop Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.handleShopNameChange}
                        />
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="exampleShopContact"
                          className="text-uppercase"
                        >
                          Shop Contact
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.handleShopContactChange}
                        />
                      </div>
                    </div>
                  )}

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

                  <div
                    className="alert alert-success alert-dismissible"
                    style={
                      this.state.successMessage
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <strong>Success! </strong> {this.state.successMessage}
                  </div>

                  <div className="form-check">
                    <button
                      type="submit"
                      className="btn btn-login float-right"
                      onClick={this.handleSubmit}
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
      </React.Fragment>
    );
  }
}
