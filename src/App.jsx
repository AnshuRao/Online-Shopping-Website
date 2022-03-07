import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import "./App.scss";

import { HomePage } from "./pages/homepage/HomePage";
import ShopPage from "../src/pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up";
import { auth , createUserProfileDocument} from "./firebase/firebase-utils";

import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.action';
import CollectionPage from './pages/collectionpage/CollectionPage.component'
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";


class App extends React.Component {

  unsubscriptionFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscriptionFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('hi i am in app ');
        console.log(user);
        const userReF = await createUserProfileDocument(user);

        userReF.onSnapshot((snapShot) => {
          // console.log('hi iam inside onSnapshot count ...in app ');
          // console.log(snapShot.data())

          setCurrentUser(
            {
                id: snapShot.id,
                ...snapShot.data(),
            },
             () => {
               console.log(this.state);
            }
          );
        });
      } else {
        setCurrentUser(user)
      
      }
    });
  }
  componentWillUnmount() {

    this.unsubscriptionFromAuth();
  }

  render() {

    return (
      <div className="App">
      {console.log(this.unsubscriptionFromAuth)}
        <Header  />

        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
          <Route exact path ="/checkout" component={CheckoutPage}/>
          

        </Switch>


      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps =(dispatch)=>({
setCurrentUser : user => dispatch(setCurrentUser(user))
})
 
export default connect(mapStateToProps,mapDispatchToProps)(App);
