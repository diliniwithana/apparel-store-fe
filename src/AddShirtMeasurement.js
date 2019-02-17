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
export default class AddShirtMeasurement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: ""
    };
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome(event) {
    this.setState({ redirectTo: "retailerHome" });
  }
  render() {
    if (this.state.redirectTo === "retailerHome") {
      return <Redirect to="/retailerHome" />;
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
                  <NavLink
                    id="profile-name"
                    href="#"
                  >
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
            Add Shirt Measurement
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
                    Length from shoulder
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cm"
                    value={this.state.email}
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
                    type="password"
                    className="form-control"
                    placeholder="cm"
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
                    value={this.state.email}
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
                    value={this.state.email}
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
                    value={this.state.email}
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
                    type="password"
                    className="form-control"
                    placeholder="cm"
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
                    value={this.state.email}
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
                    value={this.state.email}
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
                    value={this.state.email}
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
                    type="password"
                    className="form-control"
                    placeholder="cm"
                    onChange={this.handlePasswordChange}
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
                    value={this.state.email}
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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 login-sec">
              <h4>
                <span class="badge badge-secondary">Back</span>
              </h4>
              <form className="login-form">
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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-capitalize"
                  >
                    Length from shoulder
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="cm"
                    onChange={this.handlePasswordChange}
                  />
                </div>
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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </form>
            </div>
            {/** add image */}
            <div className="col-md-8 login-sec">
              <h4>
                <span class="badge badge-secondary">Image Upload</span>
              </h4>
              <div className="container" id="image-container">
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label for="imageUpload" />
                  </div>
                  <div class="avatar-preview">
                    <div
                      id="imagePreview"
                      style={{
                        "background-image":
                          "url(http://i.pravatar.cc/500?img=2)"
                      }}
                    />
                  </div>
                </div>
              </div>
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
                Add Shirt
              </button>
            </div>
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
