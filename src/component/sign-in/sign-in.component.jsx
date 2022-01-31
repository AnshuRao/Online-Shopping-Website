import React from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
 import CustomButton from "../custom-button/custome-button.component";

class SignIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

        
        <FormInput
          name="email"
          type="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="Email"
          required
        />
    
        <FormInput
          name="password"
          type="password"
          handleChange={this.handleChange}
          value={this.state.password}
          label="Password"
          required
        />
          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>

     
      </div>
    );
  }
}

export default SignIN;
