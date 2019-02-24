import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ImageUploader from "react-images-upload";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export default class AddShirtImageProcessing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "",
      pictures: [],
      loadNow: false,
      errorMessage: ""
    };

    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loadNow: true });
      }.bind(this),
      1000
    );
  }
  handleSubmit(event) {
    if (this.state.pictures.length === 2) {
      this.setState({ redirectTo: "imageProcessingResult" });
    } else {
      this.setState({ errorMessage: "Please select images" });
    }
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
      errorMessage: ""
    });
  }

  goToHome(event) {
    this.setState({ redirectTo: "retailerHome" });
  }
  render() {
    if (this.state.redirectTo === "imageProcessingResult") {
      return <Redirect to="/imageProcessingResult" />;
    } else if (this.state.redirectTo === "retailerHome") {
      return <Redirect to="/retailerHome" />;
    }

    if (!this.state.loadNow) {
      return (
        <React.Fragment>
          <section className="login-block-loader">
            <div className="container">
              <div className="col-md- login-sec">
                <img
                  src="loader-circle.gif"
                  className="rounded mx-auto d-block"
                  alt="loader..."
                />
              </div>

              <div class="center loading-msg">
                <img
                  src="please-wait.gif"
                  className="rounded mx-auto d-block"
                  alt="loader..."
                />
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <header>
          <Navbar color="dark" light expand="md">
            <NavbarBrand id="appName" onClick={this.goToHome}>
              FitsMe
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <img id="profile-pic" src="user.png" alt="profile-pic" />
                </NavItem>
                <NavItem>
                  <NavLink id="profile-name" href="#">
                    Guest User
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <br />
        <div
          className="container bg-dark text-white"
          style={{ "max-height": "540px", "overflow-y": "scroll" }}
        >
          <h4
            class="my-0 font-weight-normal"
            style={{ "padding-top": "15px", "padding-left": "10px" }}
          >
            Add Shirt Measurement using Image Processing
          </h4>

          <div className="row">
            <div className="col-md-6 login-sec">
              <h4>
                <span class="badge badge-secondary">
                  Front View of the Shirt
                </span>
              </h4>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                maxFileSize={5242880}
                withPreview={true}
              />
            </div>
            <div className="col-md-6 login-sec">
              <h4>
                <span class="badge badge-secondary">
                  Rear View of the Shirt
                </span>
              </h4>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                maxFileSize={5242880}
                withPreview={true}
              />
            </div>
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
          <button
            type="submit"
            className="btn btn-login"
            id="addShirtBtn"
            onClick={this.handleSubmit}
            style={{ "margin-bottom": "30px" }}
          >
            Run Image Processing Tool
          </button>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
