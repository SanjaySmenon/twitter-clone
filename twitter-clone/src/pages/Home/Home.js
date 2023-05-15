import React from "react";
import Sidebar from "../../components/Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default Home;
