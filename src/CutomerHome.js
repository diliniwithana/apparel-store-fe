import React, { Component } from "react";
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
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  render() {
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
                  <NavLink
                    id="profile-name"
                    href="https://github.com/reactstrap/reactstrap"
                  >
                    Dilini Withana
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <br />

        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt1.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt2.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Get started
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <img
                  src="shirt3.jpeg"
                  alt="shirt"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "250px" }}
                />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
