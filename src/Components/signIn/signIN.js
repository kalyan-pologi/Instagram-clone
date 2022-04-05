/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import "../LoginPage/LoginPage.css";

class signIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <input
          className="loginpage_text"
          type="text"
          placeholder="Phone number , username or email"
        ></input>
        <input
          className="loginpage_text"
          type="password"
          placeholder="password"
        ></input>
        <button className="loginpage_button" >
          Log In
        </button>
      </div>
    );
  }
}
export default signIN;
