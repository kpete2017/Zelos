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
          onClick={window.open(
            "https://rogueenergy.com/?gclid=CjwKCAiA9vOABhBfEiwATCi7GBpAHXrF60P8Rdr0m1r8X5mVsaACPvNvSqQ165pMMvVLu2UiK4EO7hoC7Q0QAvD_BwE"
          )}
          alt="Zelos Esports"
        ></img>
        <img
          id="sponsor2"
          height="150"
          width="150"
          src={home.partner2}
          onClick={window.open("https://www.thinkaor.com/")}
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
