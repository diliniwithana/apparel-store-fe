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

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: "",
      userData: {}
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
    this.setState({ userData: JSON.parse(localStorage.getItem("userData")) });
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
                  <NavLink id="profile-name" href="#" onClick={this.goToHome}>
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
            <div className="col-md-6 login-sec">
              <div className="d-flex justify-content-between">
                <h4 className="my-0 font-weight-normal">Fitting Details</h4>

                <h4>
                <button type="button" class="btn btn-warning">Try Virtual Fitting</button>
                </h4>
              </div>
              <br />
              <table class="table table-striped table-dark">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Area</th>
                    <th scope="col">Fitness Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stomach</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Arm Length</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Arm Girth</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Hip</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Shoulder</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Shirt Length</td>
                    <td>Oversized</td>
                  </tr>
                  <tr>
                    <td>Chest</td>
                    <td>Oversized</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 login-sec">
              <img
                src="comp_result_1.jpeg"
                alt="image1"
                style={{ height: "460px" }}
              />
            </div>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}
