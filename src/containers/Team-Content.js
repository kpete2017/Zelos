import React from "react";
import "./Team-Page.css";
import Fade from "react-reveal/Fade";
import FooterContent from "./Footer-Content";
import RainbowTeam from "../team_components/RainbowTeam";
import RocketTeam from "../team_components/RocketTeam";

export default function TeamContent({team}) {
  const handleScrollClick = (element) => {
    const findElement = document.getElementById(element);
    var offSet = getOffset(findElement).top;
    window.scrollTo({
      top: offSet - 60,
      left: 0,
      behavior: "smooth",
    });
  };

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

    return (
      <Fade>
        <div className="team-page">
          <div className="team-page-nav-buttons">
            <div
              id="rocket-league-nav-button"
              onClick={() => handleScrollClick("rl-banner")}
            >
              <h2>Rocket League Team</h2>
            </div>
            <div
              id="rainbow-six-nav-button"
              onClick={() => handleScrollClick("r6-banner")}
            >
              <h2>Rainbow Six Team</h2>
            </div>
          </div>
          <RainbowTeam team={team} />
          <br />
          <br />
          <RocketTeam team={team} />
          <br />
          <br />
          <FooterContent />
        </div>
      </Fade>
    );
}
