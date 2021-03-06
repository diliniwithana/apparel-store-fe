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

export default class RetailerHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: "",
      loadNow: false,
      userData: {}
    };
    this.gotoAddShirt = this.gotoAddShirt.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.gotoAddShirtImageProcessing = this.gotoAddShirtImageProcessing.bind(
      this
    );
  }

  viewProfile(event) {
    this.setState({ redirectTo: "profile" });
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loadNow: true , userData: JSON.parse(localStorage.getItem("userData")) });
      }.bind(this),
      1000
    );
  }

  gotoAddShirt(event) {
    this.setState({ redirectTo: "addShirt" });
  }

  gotoAddShirtImageProcessing(event) {
    this.setState({ redirectTo: "imageProcess" });
  }

  render() {
    if (this.state.redirectTo === "addShirt") {
      return <Redirect to="/addShirt" />;
    } else if (this.state.redirectTo === "imageProcess") {
      return <Redirect to="/imageProcess" />;
    } else if (this.state.redirectTo === "profile") {
      return <Redirect to="/retailerProfile" />;
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
                  src="loading.gif"
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
            <NavbarBrand id="appName" href="/">
              FitsMe
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <img id="profile-pic" src="user.png" alt="profile-pic" />
                </NavItem>
                <NavItem>
                  <NavLink id="profile-name"  onClick={this.viewProfile} >Rich Look</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <br />
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Welcome Rich Look</h1>
            <p className="lead my-3">
              Online 2D comparision model is the light weight solution to
              current online market place.
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  Add
                </strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#" onClick={this.gotoAddShirt}>
                    Add Garment Measurements Manually
                  </a>
                </h3>
                <br />
                <p className="card-text mb-auto">
                  Garment can be added to the system with its finished garment
                  measurements.
                </p>
                <a href="#" onClick={this.gotoAddShirt}>
                  Add Garment
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                style={{ width: "200px", height: "250px" }}
                src="cloth1.jpeg"
                data-holder-rendered="true"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  Add
                </strong>
                <h3 className="mb-0">
                  <a
                    className="text-dark"
                    href="#"
                    onClick={this.gotoAddShirtImageProcessing}
                  >
                    Image Processing Measurements
                  </a>
                </h3>
                <br />
                <p className="card-text mb-auto">
                  Garment can be added to the system with the help of image
                  processing tools
                </p>
                <a href="#" onClick={this.gotoAddShirtImageProcessing}>
                  Add Garment
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                style={{ width: "200px", height: "250px" }}
                src="image_process.png"
                data-holder-rendered="true"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  Edit
                </strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">
                    Edit Garment Measurement
                  </a>
                </h3>
                <br />{" "}
                <p className="card-text mb-auto">
                  Garment details can be updated using with new pictures and
                  details
                </p>
                <a href="#">Edit Garment</a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                src="cloths.jpeg"
                data-holder-rendered="true"
                style={{ width: "200px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
