import React, { Component } from "react";
import Navbar from "./componets/Navbar";
import Footer from "./componets/footer/Footer";
import Home from "./pages/Home";
import City from "./pages/City";
import RestaurantDetail from "./pages/RestaurantDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/city/:city_id" component={City} />
        <Route path="/restaurant/:restaurant_id" component={RestaurantDetail} />
        <Footer />
      </Router>
    );
  }
}

export default App;
