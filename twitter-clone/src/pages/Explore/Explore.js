import React from "react";
import "./Explore.css";
import Sidebar from "../../components/Sidebar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
function Explore() {
  return (
    <div className="explore">
      <Sidebar />

      <div className="searchbar">
        <SearchIcon className="searchicon" />
        {/* <TextField
          className="field"
          id="outlined-basic"
          label="search here"
          variant="outlined"
        /> */}
        <input placeholder="Search" type="search" class="input"></input>
      </div>
    </div>
  );
}

export default Explore;
