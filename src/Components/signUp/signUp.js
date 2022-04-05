/* eslint-disable react/no-direct-mutation-state */

import React, { Component } from "react";
import "../LoginPage/LoginPage.css";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          className="loginpage_text"
          type="text"
          placeholder="Mobile number or Email"
        ></input>
        <input
          className="loginpage_text"
          type="text"
          placeholder="Full Name"
        ></input>
        <input
          className="loginpage_text"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="loginpage_text"
          type="password"
          placeholder="password"
        ></input>
        <button className="loginpage_button">sign up</button>
      </div>
    );
  }
}

export default signUp;
