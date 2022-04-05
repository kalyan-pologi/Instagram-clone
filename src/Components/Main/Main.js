import React, { Component } from 'react'
import LoginPage from "../LoginPage/LoginPage";
import Home from "../HomePage/Home";
import "./Main.css"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true,
    };
  }
  changePage = () => {
    if (this.state.isHomePage) {
      this.setState({ isHomePage: false });
    } else {
      this.setState({ isHomePage: true });
    }
  };
  render() {
    return (
      <div>
        {this.state.isHomePage ? <LoginPage /> : <Home />}

        {this.state.isHomePage ? (
          <div className="mainPage_home">
            <button onClick={this.changePage} className="mainPage_homeBtn">
              Home Page
            </button>
          </div>
        ) : (
          <div className="mainPage_signout">
            <button onClick={this.changePage} className="mainPage_homeBtn">
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }
}
