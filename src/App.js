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
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
