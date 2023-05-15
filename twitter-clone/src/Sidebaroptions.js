import React from 'react';
import "./Sidebaroptions.css"
import { Button } from "@mui/material";
function Sidebaroptions({ active, text, Icon, link }) {
  return (
    <div className={`sidopt ${active && "sidopt--active"}`}>
      <Button className="sidbtn" href={link}>
        <div className="side">
          <Icon />
          <h2>{text}</h2>
        </div>
      </Button>
    </div>
  );
}

export default Sidebaroptions
