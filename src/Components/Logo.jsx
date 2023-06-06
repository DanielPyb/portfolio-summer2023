import selfie from "../images/Selfie.png"

import React from "react";

export default function Logo() {
  return (
    <div className="logo">
      <div className="ball-container">
        <div className="top-ball"></div>
      </div>
      <p className="hero-text">
        Daniel Sollid is a motion designer and web developer based in Oslo,
        Norway
      </p>
      <img src={selfie} alt="a self insert of daniel" className="hero-image"></img>
      <div className="ball-container">
        <div className="lower-ball"></div>
      </div>
    </div>
  );
}
