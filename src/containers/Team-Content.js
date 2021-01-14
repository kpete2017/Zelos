import React from "react";
import "./Team-Page.css";
import Fade from "react-reveal/Fade";
import Team from "../components/IndividualTeam";

export default function TeamContent({ teams }) {
  return (
    <Fade>
      <div className="team-page">
        {teams.map((t) => {
          return <Team team={t.team} players={t.players} />;
        })}
      </div>
    </Fade>
  );
}
