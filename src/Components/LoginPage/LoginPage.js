import React, { Component } from "react";
import SignIN from "../signIn/signIN";
import SignUp from "../signUp/signUp";

import "./LoginPage.css";
import Grid from "@mui/material/Grid";
import insta_image from "../../images/images/9364675fb26a.svg";
import insta_logo from "../../images/images/logoinsta.png";
import fb from "../../images/images/fb.png";
import appstore from '../../images/images/app.png'
import playstore from "../../images/images/play.png";


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  changeLogin = () =>{
    if(this.state.isLogin){
      this.setState({isLogin: false});
    }
    else{
      this.setState({isLogin: true});
    }

  }
  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={insta_image} width="454px" alt="" />
              </div>
              {/* home page */}
              {/* <div className="mainPage_home">
                <button onClick={this.changePage} className="mainPage_homeBtn">
                  Home Page
                </button>
              </div> */}
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage_logo" src={insta_logo} alt="" />
                  <div className="loginpage_signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}

                    <div className="login_ordiv">
                      <div className="login_dividor"></div>
                      <div className="login_or">OR</div>
                      <div className="login_dividor"></div>
                    </div>
                    <div className="login__fb">
                      <img
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px" }}
                        alt=""
                      />{" "}
                      Log in with Facebok
                    </div>
                    <div className="login_forgt">Forgot Password?</div>
                  </div>
                </div>
                <div className="loginpage_signupoption">
                  {this.state.isLogin ? (
                    <div className="loginpage_signin">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginpage_signin">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
                <div className="loginpage_downloadSection">
                  <div>Get the app</div>
                  <div className="loginpage_option">
                    <img
                      className="loginpage_dwimg"
                      src={appstore}
                      width="136px"
                      alt=" "
                    />
                    <img
                      className="loginpage_dwimg"
                      src={playstore}
                      width="136px"
                      alt=" "
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </>
    );
  }
}

export default LoginPage;
