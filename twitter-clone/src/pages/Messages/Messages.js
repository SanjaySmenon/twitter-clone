import React from "react";
import "./Messages.css";
import Sidebar from "../../components/Sidebar";
import { Grid } from "@mui/material";
function Messages() {
  return (
    <div className="messages">
      <Sidebar />
      <h1>Welcome to Messages</h1>
      <div className="write">
        <Grid container>
          <Grid>
            <button class="cssbuttons-io-button">
              {" "}
              Write a message
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Messages;
