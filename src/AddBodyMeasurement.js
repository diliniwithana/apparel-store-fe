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
import { Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";

export default class AddBodyMeasurement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "",
      open: false
    };
    this.viewProfile = this.viewProfile.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  goToHome(event) {
    this.setState({ redirectTo: "customerHome" });
  }
  viewProfile(event) {
    this.setState({ redirectTo: "profile" });
  }

  render() {
    const { open } = this.state;
    if (this.state.redirectTo === "profile") {
      return <Redirect to="/customerProfile" />;
    } else if (this.state.redirectTo === "customerHome") {
      return <Redirect to="/customerHome" />;
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
                    onClick={this.viewProfile}
                  >
                    Guest User
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <br />
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="row">
            <div className="col-md-12 login-sec">
              <img src="body-guid.jpg" alt="" />
            </div>
          </div>
        </Modal>

        <div
          className="container bg-dark text-white"
          style={{ maxHeightt: "540px", overflowY: "scroll" }}
        >
          <h4
            className="my-0 font-weight-normal"
            style={{ paddingTop: "15px", paddingLeft: "10px" }}
          >
            Add Body Measurement
          </h4>
          <button className="btn btn-help" onClick={this.onOpenModal}>
            Help in Measurements
          </button>
          <div className="row">
            <div className="col-md-4 login-sec">
              <h4>
                <span className="badge badge-secondary">Body</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Neck girth <span className="badge badge-secondary">1</span>
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
                    Neck base
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
                    Chest <span className="badge badge-secondary">2</span>
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
                    Hip <span className="badge badge-secondary">5</span>
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
                <span className="badge badge-secondary">Body</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    Waist <span className="badge badge-secondary">4</span>
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
                    Shoulder to Waist
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
                    Side neck to waist
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
                    Under arm to waist
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
                <span className="badge badge-secondary">Body</span>
              </h4>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-capitalize"
                  >
                    waist to hip
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
                    Shoulder width
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
                    Arm girth
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
                    Upper arm girth
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
                <span className="badge badge-secondary">Body</span>
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
                    Collar
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="cm"
                    onChange={this.handlePasswordChange}
                  />
                </div>
              </form>
            </div>
            {/** add image */}
            <div className="col-md-8 login-sec">
              <h4>
                <span className="badge badge-secondary">Image Upload</span>
              </h4>
              <div className="container" id="image-container">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label htmlFor="imageUpload" />
                  </div>
                  <div className="avatar-preview">
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage: "url(http://i.pravatar.cc/500?img=2)"
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
                Add Body Measurements
              </button>
            </div>
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
