import React from "react";
import "./Notifications.css";
import Button from "@mui/material/Button";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

function Notifications() {
  const Navigate = useNavigate();
  return (
    <Grid container className="notifications">
      <Grid xs={3.5}>
        <Sidebar />
      </Grid>
      <Grid className="notif">
        <h1 className="h1"> Notification</h1>
        <div className="buttons">
          <Grid className="1">
            <Button
              variant="text"
              onClick={() => Navigate("/all")}
              className="btn1"
            >
              <h2>All</h2>
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="text"
              onClick={() => Navigate("/")}
              className="btn2"
            >
              <h2>Verified</h2>
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="text"
              onClick={() => Navigate("/")}
              className="btn3"
            >
              <h2>Mentions</h2>
            </Button>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default Notifications;

