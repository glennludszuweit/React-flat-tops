import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Don't have an account</h2>
        <span>Sign up with your email and password.</span>

        <form className="sign-up-form">
          <FormInput
            name="displayName"
            type="text"
            label="Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
