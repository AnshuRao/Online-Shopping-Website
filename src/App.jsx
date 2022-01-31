import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./pages/homepage/HomePage";

import ShopPage from "../src/pages/shop/shop.component";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path ="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
};

export default App;
