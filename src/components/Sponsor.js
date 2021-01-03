import React from "react";
import "./Sponsor.css";

export default function Sponsor({home}) {
  return (
    <div className="sponsors-section">
      <h1>Our Partners</h1>
      <div className="sponsors">
        <img
          id="sponsor1"
          height="150"
          width="150"
          src={home.partner1}
          alt="Zelos Esports"
        ></img>
        <img
          id="sponsor2"
          height="150"
          width="150"
          src={home.partner2}
          alt="Zelos Esports"
        ></img>
        <img
          id="sponsor3"
          height="150"
          width="150"
          src={home.partner3}
          alt="Zelos Esports"
        ></img>
      </div>
    </div>
  );
}
