import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import classnames from 'classnames';
import ReactImageMagnify from "react-image-magnify";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

export default class RetailerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: "",
      userData: {},
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToAddBodyMeasuremtns = this.goToAddBodyMeasuremtns.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  goToHome(event) {
    this.setState({ redirectTo: "retailerHome" });
  }

  goToAddBodyMeasuremtns(event) {
    this.setState({ redirectTo: "addBody" });
  }

  componentDidMount() {
    this.setState({ userData: JSON.parse(localStorage.getItem("userData")) });
  }
  render() {
    if (this.state.redirectTo === "retailerHome") {
      return <Redirect to="/retailerHome" />;
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

        <div className="container col-md-8 bg-dark text-white">
          <div className="row">
            <div className="col-md-12 login-sec">
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Personal Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      View 
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
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
                            Shop Address
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
                            value={this.state.userData.primaryContact}
                            onChange={this.handleEmailChange}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="text-uppercase"
                          >
                            Shop Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={"Rich Look"}
                            onChange={this.handleEmailChange}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="text-uppercase"
                          >
                            Shop Contact Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={"011410897"}
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
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                          <CardTitle>Emarold</CardTitle>
                          <CardText>
                          <div className="image-1">
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Wristwatch by Ted Baker London",
                                isFluidWidth: true,
                                src: "shirt3.jpeg"
                              },
                              largeImage: {
                                src: "shirt3.jpeg",
                                width: 1200,
                                height: 1800
                              },
                              enlargedImagePosition: "over"
                            }}
                          />
                        </div>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Size: 16 inch</li>
                          <li>Color: Checked</li>
                          <li>Type: Loose-fit</li>
                        </ul>
                          </CardText>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                          <CardTitle>Emarold</CardTitle>
                          <CardText>
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
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Size: 16 inch</li>
                          <li>Color: Checked</li>
                          <li>Type: Loose-fit</li>
                        </ul>
                          </CardText>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>

              
            </div>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}
