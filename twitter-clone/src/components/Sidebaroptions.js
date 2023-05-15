import React from "react";
import "./Sidebaroptions.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Sidebaroptions({ active, text, Icon, link, path }) {
  const Navigate = useNavigate();

  return (
    <div className={`sidopt ${active && "sidopt--active"}`}>
      <Button onClick={() => Navigate(path)} className="sidbtn" href={link}>
        <div className="side">
          <Icon />
          <h2>{text}</h2>
        </div>
      </Button>
    </div>
  );
}

export default Sidebaroptions;
