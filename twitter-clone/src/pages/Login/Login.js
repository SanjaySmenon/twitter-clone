import React from "react";
import "./Login.css";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function Login() {
  const Navig = useNavigate();
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="username">
        <PersonIcon />

        <TextField id="outlined-basic" label="username" variant="outlined" />
        <div className="pass">
          <PasswordIcon />
          <TextField id="outlined-basic" label="password" variant="outlined" />
        </div>
      </div>
    </div>
  );
}

export default Login;
