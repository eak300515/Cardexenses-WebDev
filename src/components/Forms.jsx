import React, { useState } from "react";

export const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="login-email">Email:</label>
        <input type="email" className="form-control" id="login-email" />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password:</label>
        <input type="password" className="form-control" id="login-password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export const SignupForm = () => {
  return (
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="signup-email">Email:</label>
        <input type="email" className="form-control" id="signup-email" />
      </div>
      <div className="form-group">
        <label htmlFor="signup-password">Password:</label>
        <input type="password" className="form-control" id="signup-password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};
