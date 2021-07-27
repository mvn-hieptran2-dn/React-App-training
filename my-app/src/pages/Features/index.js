import React from 'react';
import AboutUs from './AboutUs';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <Switch>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Features;
