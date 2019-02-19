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

export default class CustomerHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: "",
    };
    this.viewProfile = this.viewProfile.bind(this);
    this.goToResult = this.goToResult.bind(this);
  }

  viewProfile(event) {
    this.setState({ redirectTo: "profile" });
  }

  goToResult(event, shirtId) {
    localStorage.setItem("clickedShirtId", shirtId)
    this.setState({ redirectTo: "result" });
  }

  componentDidMount() {
   
  }

  render() {
    if (this.state.redirectTo === "profile") {
      return <Redirect to="/customerProfile" />;
    } else if (this.state.redirectTo === "result") {
      return <Redirect to="/result" />;
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
                  <NavLink id="profile-name" onClick={this.viewProfile}>
                    Guest User
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <br />

        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Welcome Guest User</h1>
            <p className="lead my-3">
              Choose the apparel item of your choice and click{" "}
              <i>Check Fitness Levels</i> button to view the correct fitness
              levels against your own body measurements.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Emarold</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt1.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Checked</li>
                  <li>Type: Loose-fit</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onClick={() => this.goToResult(this, "1")}>
                  Check Fitness Level
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Signature</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt2.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Checked</li>
                  <li>Type: Smart-fit</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onClick={() => this.goToResult(this, "2")}>
                  Check Fitness Level
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Lacoste</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt5.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Lighr blue</li>
                  <li>Type: Loose-fit</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onClick={() => this.goToResult(this, "3")}>
                  Check Fitness Level
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
