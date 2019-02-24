import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import CustomerHome from "./CutomerHome";
import RetailerHome from "./RetailerHome";
import CustomerProfile from "./CustomerProfile"
import AddShirtMeasurement from "./AddShirtMeasurement";
import AddBodyMeasurement from "./AddBodyMeasurement";
import ResultsPage from "./ResultsPage";
import AddShirtImageProcessing from "./AddShirtImageProcessing"
import ImageProcessingResult from "./ImageProcessingResult"
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/customerHome" component={CustomerHome} />
            <Route path="/retailerHome" component={RetailerHome} />
            <Route path="/customerProfile" component={CustomerProfile} />
            <Route path="/addShirt" component={AddShirtMeasurement} />
            <Route path="/addBody" component={AddBodyMeasurement} />
            <Route path="/result" component={ResultsPage} />
            <Route path="/imageProcess" component={AddShirtImageProcessing} />
            <Route path="/imageProcessingResult" component={ImageProcessingResult} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
