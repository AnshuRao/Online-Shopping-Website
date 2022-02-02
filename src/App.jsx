import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./pages/homepage/HomePage";

import ShopPage from "../src/pages/shop/shop.component";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up";
import { auth } from "./firebase/firebase-utils";


class App extends React.Component {
  constructor(){
    super();


    this.state ={
      currentUser : null
    }
  }
unsubscriptionFromAuth = null;

componentDidMount(){
 
  this.unsubscriptionFromAuth = auth.onAuthStateChanged((user) => {
    console.log(user);
    console.log('hi im inside authStateChanger')
    this.setState({currentUser : user} ,()=>{console.log(this.state)});

    
  })
 
}
componentWillUnmount(){
 
  this.unsubscriptionFromAuth();
}

  render() {
    return (
      <div className="App">
        <Header  currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path ="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }


};

export default App;
