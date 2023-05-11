import React from 'react';
import "./Sidebaroptions.css"
function Sidebaroptions({active,text,Icon}) {
  return (
    <div className={`sidopt ${active && "sidopt--active"}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroptions
