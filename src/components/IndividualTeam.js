import React from "react";
import Player from "../components/TeamPagePlayer";

export default function IndividualTeam({ team, players }) {
  return (
    <>
      <div
        className="header-banner"
        id="r6-banner"
        style={{
          backgroundImage: `url(${team.banner_image})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 id="header-game-title">{team.game}</h1>
      </div>
      <div className="r6team">
        {players.map((player) => {
          return <Player player={player} />;
        })}
      </div>
    </>
  );
}
