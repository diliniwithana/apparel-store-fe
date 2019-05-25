import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export default class ImageProcessingResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "",
      loadNow: false,
      dummyMeasuremetns: {
        lengthFromShoulder: 65.1,
        seamLength: 40.7,
        lengthFromMiddle: 65,
        lengthFromCollarToShoulder: 18.5,
        lowerHipWidth: 55,
        waist: 54.8,
        chest: 55.6,
        collarWidth: 18.3,
        upperArmLength: 23.9,
        lowerArmLength: 15.4,
        lowerGirth: 36.4,
        upperGirth: 47.2,
        backLengthFromMiddle: 70.9,
        backLengthFromShoulder: 65.3,
        backShoulderWidth: 46.5
      },
      errorMessage: ""
    };
    this.goToHome = this.goToHome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ loadNow: true });
      }.bind(this),
      5000
    );
  }

  goToHome(event) {
    this.setState({ redirectTo: "retailerHome" });
  }

  handleSubmit(event){
    this.setState({ errorMessage: "Shirt measurements are added" });
  }

  render() {
    if (this.state.redirectTo === "retailerHome") {
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
                  src="extracting-image-measurements.gif"
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
            Image Processing Results
          </h4>
          <div className="row">
            <div className="col-md-4 login-sec">
              <h4>
                <span class="badge badge-secondary">Front</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Length from shoulder{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.lengthFromShoulder}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-capitalize"
                  >
                    Seam length
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.seamLength}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Length from middle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.lengthFromMiddle}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Length from collar to shoulder
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={
                      this.state.dummyMeasuremetns.lengthFromCollarToShoulder
                    }
                    onChange={this.handleEmailChange}
                  />
                </div>
                <h4>
                  <span class="badge badge-secondary">Back</span>
                </h4>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Length from middle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.backLengthFromMiddle}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </form>
            </div>

            <div className="col-md-4 login-sec">
              <h4>
                <span class="badge badge-secondary">Front</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Width-lower/ Hip level
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.lowerHipWidth}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-capitalize"
                  >
                    Waist
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.waist}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Chest
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.chest}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Collar width
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.collarWidth}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <h4>
                  <span class="badge badge-secondary">Back</span>
                </h4>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Length from shoulder
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.backLengthFromShoulder}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </form>
            </div>

            <div className="col-md-4 login-sec">
              <h4>
                <span class="badge badge-secondary">Arm</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Upper arm length
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.upperArmLength}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-capitalize"
                  >
                    Lower arm length
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    onChange={this.handlePasswordChange}
                    value={this.state.dummyMeasuremetns.lowerArmLength}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Lower girth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.lowerGirth}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Upper girth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.upperGirth}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <h4>
                  <span class="badge badge-secondary">Back</span>
                </h4>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Shoulder width
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.dummyMeasuremetns.backShoulderWidth}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 login-sec">
              <button
                type="submit"
                className="btn btn-login float-right"
                id="addShirtBtn"
                onClick={this.handleSubmit}
              >
                Add Calculated Measurements
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="alert alert-success alert-dismissible"
                style={
                  this.state.errorMessage
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <strong>Success!</strong> {this.state.errorMessage}
              </div>
            </div>
          </div>
        </div>
        <br />
      </React.Fragment >
    );
  }
}
