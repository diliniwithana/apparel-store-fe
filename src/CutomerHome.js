import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

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
      loadNow: false
    };
    this.viewProfile = this.viewProfile.bind(this);
    this.goToResult = this.goToResult.bind(this);
    
  }

  viewProfile(event) {
    this.setState({ redirectTo: "profile" });
  }

  goToResult(event, shirtId) {
    localStorage.setItem("clickedShirtId", shirtId);
    this.setState({ redirectTo: "result" });
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loadNow: true });
      }.bind(this),
      1000
    );
  }

  render() {
    if (this.state.redirectTo === "profile") {
      return <Redirect to="/customerProfile" />;
    } else if (this.state.redirectTo === "result") {
      return <Redirect to="/result" />;
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
                <div className="image-1">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "shirt1.jpeg"
                      },
                      largeImage: {
                        src: "shirt1.jpeg",
                        width: 1200,
                        height: 1800
                      },
                      enlargedImagePosition: "over"
                    }}
                  />
                </div>
                <br />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Checked</li>
                  <li>Type: Loose-fit</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary"
                  onClick={() => this.goToResult(this, "1")}
                >
                  Check Fitness Level
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Signature</h4>
              </div>
              <div class="card-body">
                <div className="image-1">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "shirt2.jpeg"
                      },
                      largeImage: {
                        src: "shirt2.jpeg",
                        width: 1200,
                        height: 1800
                      },
                      enlargedImagePosition: "over"
                    }}
                  />
                </div>
                <br />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Checked</li>
                  <li>Type: Smart-fit</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary"
                  onClick={() => this.goToResult(this, "2")}
                >
                  Check Fitness Level
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Lacoste</h4>
              </div>
              <div class="card-body">
                <div className="image-1">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "shirt4.jpeg"
                      },
                      largeImage: {
                        src: "shirt4.jpeg",
                        width: 1200,
                        height: 1800
                      },
                      enlargedImagePosition: "over"
                    }}
                  />
                </div>
                <br />
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Size: 16 inch</li>
                  <li>Color: Lighr blue</li>
                  <li>Type: Loose-fit</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary"
                  onClick={() => this.goToResult(this, "3")}
                >
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
