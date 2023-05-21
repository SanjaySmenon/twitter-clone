import TwitterIcon from "@mui/icons-material/Twitter";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { Component } from "react";
import firebase from "firebase/compat/app";
import db from "../Home/firebase";

function LLogin() {
  const [userName, setuserName] = useState("");
  const [displayName, setdisplayName] = useState("");
  const senduser = (e) => {
    e.preventDefault();

    db.collection("users").add({
      username: userName,
      displayname: displayName,
    });
    setdisplayName("");
    setuserName("");
  };
  return (
    <div>
      <input
        type="username"
        id="username"
        name="username"
        class="input"
        placeholder="username"
        onChange={(e) => setuserName(e.target.value)}
        value={userName}
      />
      <input
        type="displayname"
        id="displayname"
        name="displayname"
        class="input"
        placeholder="displayname"
        onChange={(e) => setdisplayName(e.target.value)}
        value={displayName}
      />
      <button onClick={senduser} class="btn">
        save
      </button>
    </div>
  );
}
export { LLogin };

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  signup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form>
          <div className="login">
            <div class="container">
              <input id="signup_toggle" type="checkbox" />
              <form class="form">
                <div class="form_front">
                  <div class="form_details">
                    Login
                    <TwitterIcon className="icon" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="input"
                    placeholder="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="input"
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <button onClick={this.login} class="btn">
                    Login
                  </button>
                  <span class="switch">
                    Don't have an account?
                    <label for="signup_toggle" class="signup_tog">
                      Sign Up
                    </label>
                  </span>
                </div>
                <div class="form_back">
                  <TwitterIcon className="icon" />
                  <div class="form_details">SignUp</div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="input"
                    placeholder="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="input"
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />

                  {/* <input
                    type="text"
                    class="input"
                    placeholder="Confirm Password"
                  /> */}
                  <button onClick={this.signup} class="btn">
                    Signup
                  </button>
                  <span class="switch">
                    Already have an account?
                    <label for="signup_toggle" class="signup_tog">
                      Sign In
                    </label>
                  </span>

                  <LLogin />
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// function Login() {
//   const Navigate = useNavigate();
//   return (

//   );
// }

// export { Login };
