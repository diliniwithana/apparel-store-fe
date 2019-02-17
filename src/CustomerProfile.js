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

export default class CustomerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: "",
      userData:{}
    };
    this.goToHome = this.goToHome.bind(this);
    this.goToAddBodyMeasuremtns = this.goToAddBodyMeasuremtns.bind(this);
  }

  goToHome(event) {
    this.setState({ redirectTo: "customerHome" });
  }

  goToAddBodyMeasuremtns(event) {
    this.setState({ redirectTo: "addBody" });
  }

  componentDidMount() {
    this.setState({userData: JSON.parse(localStorage.getItem("userData"))})
  }
  render() {
    if (this.state.redirectTo === "customerHome") {
      return <Redirect to="/customerHome" />;
    } else if (this.state.redirectTo === "addBody") {
      return <Redirect to="/addBody" />;
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

        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col-md-8 login-sec">
              <h4 className="my-0 font-weight-normal">Personal Info</h4>
              <br />
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.userData.name}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.userData.email}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.userData.address}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={ this.state.userData.primaryContact}
                    onChange={this.handleEmailChange}
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
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.handleSubmit}
                  >
                    Update
                  </button>
                </div>
                <div className="form-group text-center register" />
              </form>
            </div>
            <div className="col-md-4 login-sec">
              <img
                src="profile_cloth.jpg"
                alt="image1"
                style={{ width: "330px", height: "435px" }}
              />
            </div>
          </div>
        </div>
        <br />

        <div className="container bg-light text-dark">
          <div className="row">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-primary">
                    Add
                  </strong>
                  <h3 className="mb-0">Add Body Measurement</h3>
                  <br />

                  <a href="#" onClick={this.goToAddBodyMeasuremtns}>
                    Add Body
                  </a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  style={{ width: "100px", height: "150px" }}
                  src="cloth1.jpeg"
                  data-holder-rendered="true"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success">
                    Edit
                  </strong>
                  <h3 className="mb-0">Edit Body Measurement</h3>
                  <br /> <a href="#">Edit Body</a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="cloths.jpeg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
