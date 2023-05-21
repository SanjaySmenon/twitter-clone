import firebase from "firebase/compat/app";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import { Route, Routes } from "react-router-dom";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import All from "./pages/Notifications/All/All";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? <AApp /> : <Login />}
        <form></form>
      </div>
    );
  }
}

function AApp() {
  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />
        <Route path="lists" element={<Lists />} />
        <Route path="profile" element={<Profile />} />

        <Route path="/all" element={<All />} />
      </Routes>
    </div>
  );
}

export { AApp };
