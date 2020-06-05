import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleLogin, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleLogin ? "google-login" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
