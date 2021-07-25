import React from 'react';
import AboutUs from './AboutUs';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Home from './Home';
import { Switch, Router } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <Switch>
        <Router path="/products/:id">
          <ProductDetail />
        </Router>
        <Router path="/products">
          <Products />
        </Router>
        <Router path="/about-us">
          <AboutUs />
        </Router>
        <Router path="/">
          <Home />
        </Router>
      </Switch>
    </>
  );
};

export default Features;
