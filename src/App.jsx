import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./pages/homepage/HomePage";

import ShopPage from "../src/pages/shop/shop.component";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up";
import { auth } from "./firebase/firebase-utils";
import { createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscriptionFromAuth = null;

  componentDidMount() {
    this.unsubscriptionFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('hi i am in app ');
        console.log(user);
        const userReF = await createUserProfileDocument(user);

        userReF.onSnapshot((snapShot) => {
          console.log('hi iam inside onSnapshot count ...in app ');
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
             () => {
               console.log(this.state);
            }
          );
        });
      } else {
        this.setState({
          //currentUser : null
          currentUser: user,
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscriptionFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
