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
      loadNow: false,
      redirectTo: "",
      userData: {},
      shirtId: "",
      bodyMeasurements: {},
      shirtMeasurements: {},
      shoulder: "",
      chest: "",
      armGirth: "",
      armLength: "",
      length: "",
      hip: ""
    };
    this.goToHome = this.goToHome.bind(this);
    this.goToAddBodyMeasuremtns = this.goToAddBodyMeasuremtns.bind(this);
    this.calculate2DComparison = this.calculate2DComparison.bind(this);
    this.compShoulder = this.compShoulder.bind(this);
    this.compLength = this.compLength.bind(this);
    this.compHip = this.compHip.bind(this);
    this.compChest = this.compChest.bind(this);
    this.compArmGirth = this.compArmGirth.bind(this);
    this.compArmLength = this.compArmLength.bind(this);
  }

  calculate2DComparison() {
    this.shirtObj = this.state.shirtMeasurements;
    this.bodyObj = this.state.bodyMeasurements;
    if (
      Object.keys(this.shirtObj).length === 0 &&
      this.shirtObj.constructor === Object &&
      Object.keys(this.bodyObj).length === 0 &&
      this.bodyObj.constructor === Object
    ) {
      console.log("Measuremtn data are empty");
    } else {
      // calculate equations
      console.log("Start calculation of human-body-measurements...");
      this.body_shoulder = this.bodyObj.shoulderWidth / 2;
      this.body_chest = (this.bodyObj.chest / 2 + 1) / 2;
      this.body_hip = (this.bodyObj.hip / 2 + 1) / 2;
      this.body_upperArmLength = this.bodyObj.upperArmLength;
      this.body_length = this.bodyObj.sideNeckToWaist + this.bodyObj.waistToHip;
      this.body_lowerArmGirth = this.bodyObj.armGirth;
      console.log("<Human>===============");
      console.log(
        "Shoulder: " +
          this.body_shoulder +
          " Chest: " +
          this.body_chest +
          " Hip: " +
          this.body_hip +
          " UpperArmLength: " +
          this.body_upperArmLength +
          " Length: " +
          this.body_length +
          " LowerArmGirth: " +
          this.body_lowerArmGirth
      );

      // shirt calculations
      console.log("Start calculation of shirt-measurements...");
      let c = 1.4; // this constant value taken from mean error value in reseach
      let a = 0.4; // this constant value taken from mean error value in reseach
      let y = 0.5; // this constant value taken from mean error value in reseach
      let b = 0.9; // this constant value taken from mean error value in reseach
      let x = 1.7; // this constant value taken from mean error value in reseach
      this.shirt_shoulder = this.shirtObj.backShoulderWidth / 2;
      this.shirt_chest = (this.shirtObj.chest + c) / 2;
      this.shirt_hip = (this.shirtObj.lowerHipWidth + a) / 2;
      this.shirt_upperArmLength = this.shirtObj.upperArmLength + y;
      this.shirt_length = this.shirtObj.lengthFromMiddle + b;
      this.shirt_lowerArmGirth = this.shirtObj.lowerGirth + x;
      console.log("<Shirt>===============");
      console.log(
        "Shoulder: " +
          this.shirt_shoulder +
          " Chest: " +
          this.shirt_chest +
          " Hip: " +
          this.shirt_hip +
          " UpperArmLength: " +
          this.shirt_upperArmLength +
          " Length: " +
          this.shirt_length +
          " LowerArmGirth: " +
          this.shirt_lowerArmGirth
      );

      // compare shoulder measurements
      this.setState({
        shoulder: this.compShoulder(this.body_shoulder, this.shirt_shoulder)
      });
      this.setState({
        length: this.compLength(this.body_length, this.shirt_length)
      });
      this.setState({ hip: this.compHip(this.body_hip, this.shirt_hip) });
      this.setState({
        chest: this.compChest(this.body_chest, this.shirt_chest)
      });
      this.setState({
        armGirth: this.compArmGirth(
          this.body_lowerArmGirth,
          this.shirt_lowerArmGirth
        )
      });
      this.setState({
        armLength: this.compArmLength(
          this.body_upperArmLength,
          this.shirt_upperArmLength
        )
      });
      console.log(this.compShoulder(this.body_shoulder, this.shirt_shoulder));
      console.log(this.compLength(this.body_length, this.shirt_length));
      console.log(this.compHip(this.body_hip, this.shirt_hip));
      console.log(this.compChest(this.body_chest, this.shirt_chest));
      console.log(
        this.compArmGirth(this.body_lowerArmGirth, this.shirt_lowerArmGirth)
      );
      console.log(
        this.compArmLength(this.body_upperArmLength, this.shirt_upperArmLength)
      );
    }
  }

  compArmLength(m1, m2) {
    if (m1 > m2) {
      return "Shirt is small";
    } else {
      return "Shirt is large";
    }
  }

  compArmGirth(m1, m2) {
    /*
        Small = Difference < 0.3
        Tight fit = 0.6 > Difference >= 0.3
        Normal fit = 1 > Difference >=0.6
        Comfort fit = 1.5 > Difference >= 1
        Oversize = Difference > 1.5
      */
    let difference = m1 - m2;
    if (difference < 0.3) {
      return "Small";
    } else if (0.6 > difference && difference >= 0.3) {
      return "Thigth fit";
    } else if (1 > difference && difference >= 0.6) {
      return "Normal fit";
    } else if (1.5 > difference && difference >= 1) {
      return "Comfort fit";
    } else if (difference >= 1.5) {
      return "Oversized";
    } else {
      return "Not specified";
    }
  }

  compChest(m1, m2) {
    if (m1 > m2) {
      return "Shirt is small";
    } else {
      return "Shirt is large";
    }
  }

  compHip(m1, m2) {
    /*
        Small: Difference < 0.3
        Tight Fit: Difference < 0.8 and Difference >= 0.3
        Normal Fit: Difference < 1.5 and Difference >= 0.8
        Comfort Fit: Difference < 2.3 and Difference >= 1.5
        Oversized garment: Difference >= 2.3
    */
    let difference = m1 - m2;
    if (difference < 0.3) {
      return "Small";
    } else if (0.8 > difference && difference >= 0.3) {
      return "Thigth fit";
    } else if (1.5 > difference && difference >= 0.8) {
      return "Normal fit";
    } else if (2.3 > difference && difference >= 1.5) {
      return "Comfort fit";
    } else if (difference >= 2.3) {
      return "Oversized";
    } else {
      return "Not specified";
    }
  }

  compLength(m1, m2) {
    // The length difference is prefered by user
    let difference = (m1 - m2).toFixed(2);
    if (difference > 0) {
      return "Shirt is " + difference.toString() + " cm shorter";
    } else {
      return "Shirt is " + (difference * -1).toString() + " cm longer";
    }
  }

  compShoulder(m1, m2) {
    /*
        Small = Difference < 0.4
        Tight fit = 0.6 > Difference >= 0.4
        Comfort fit = 1.4 > Difference >= 0.6
        Oversize = Difference > 1.4
    */
    let difference = m1 - m2;
    if (difference < 0.4) {
      return "Small";
    } else if (0.6 > difference && difference >= 0.4) {
      return "Thigth fit";
    } else if (1.4 > difference && difference >= 0.6) {
      return "Comfort fit";
    } else if (difference > 1.4) {
      return "Oversized";
    } else {
      return "Not specified";
    }
  }
  goToHome(event) {
    this.setState({ redirectTo: "customerHome" });
  }

  goToAddBodyMeasuremtns(event) {
    this.setState({ redirectTo: "addBody" });
  }

  componentDidMount() {
    // for page loader
    setTimeout(
      function() {
        this.setState({ loadNow: true });
      }.bind(this),
      5000
    );
    // get user data
    this.setState({ userData: JSON.parse(localStorage.getItem("userData")) });
    // get shirt data
    this.setState({ shirtId: localStorage.getItem("clickedShirtId") }, () => {
      if (this.state.shirtId) {
        // get body measuremtns and shirt measuremtn from database
        fetch(`http://localhost:3001/bodyMeasurement/getBodyMeasurement/11`)
          .then(response => response.json())
          .then(bodyMeasurementsObj => {
            console.log(JSON.stringify(bodyMeasurementsObj));
            this.setState({ bodyMeasurements: bodyMeasurementsObj }, () => {
              // getting shirt measuremtns from database
              fetch(
                `http://localhost:3001/shirts/getShirtById/${
                  this.state.shirtId
                }`
              )
                .then(response => response.json())
                .then(shirtMeasurementsObj => {
                  console.log(JSON.stringify(shirtMeasurementsObj));
                  this.setState(
                    { shirtMeasurements: shirtMeasurementsObj },
                    () => {
                      // calling 2D modeling method
                      this.calculate2DComparison();
                    }
                  );
                })
                .catch(err => {
                  console.log("Fetching Shirt-measuremnt failed");
                });
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("Fetching bodyMeasurements failed");
      }
    });

    //
  }
  render() {
    if (this.state.redirectTo === "customerHome") {
      return <Redirect to="/customerHome" />;
    } else if (this.state.redirectTo === "addBody") {
      return <Redirect to="/addBody" />;
    }
    if (!this.state.loadNow) {
      return (
        <React.Fragment>
          <section className="login-block-loader">
            <div className="container">
              <div className="col-md- login-sec">
                <img
                  src="loader-bar.gif"
                  className="rounded mx-auto d-block"
                  alt="loader..."
                />
              </div>

              <div class="center loading-msg">
                <img
                  src="text-animation.gif"
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
                  <button type="button" class="btn btn-warning">
                    Try Virtual Fitting
                  </button>
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
                    <td>Shoulder</td>
                    <td>{this.state.shoulder}</td>
                  </tr>
                  <tr>
                    <td>Chest</td>
                    <td>{this.state.chest}</td>
                  </tr>
                  <tr>
                    <td>Arm Length</td>
                    <td>{this.state.armLength}</td>
                  </tr>
                  <tr>
                    <td>Arm Girth</td>
                    <td>{this.state.armGirth}</td>
                  </tr>
                  <tr>
                    <td>Shirt Length</td>
                    <td>{this.state.length}</td>
                  </tr>
                  <tr>
                    <td>Hip</td>
                    <td>{this.state.hip}</td>
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
