import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./authpage.styles.scss";

const AuthPage = () => (
  <div className="auth">
    <div className="form">
      <SignIn />
    </div>
    <div className="form">
      <SignUp />
    </div>
  </div>
);

export default AuthPage;
