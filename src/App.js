import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/categories" component={Categories} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
