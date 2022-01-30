import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./pages/homepage/HomePage";

import ShopPage from '../src/pages/shop/shop.component';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
