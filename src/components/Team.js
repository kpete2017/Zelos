import React from "react";
import Player from "./player";
import "./Teams.css";

export default function Teams({ team }) {
  let width = window.innerWidth;
  const wideScreenData = {
    backgroundImage: `url(${team.team.front_page_image})`,
    backgroundAttachment: "fixed",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const smallScreenData = {
    backgroundImage: `url(${team.team.front_page_image})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="team-section-area" id="team">
      <div className="teams">
        {width > 750 ? (
          <div className="team-r6" style={wideScreenData}>
            <div className="r6">
              <div className="r6-black-background">
                <br />
                <br />
                <h1 id="r6">{team.team.game}</h1>
                <div className="player-list-players">
                  <br />
                  {team.players.map((player) => {
                    return (
                      <>
                        <br />
                        <Player player={player} key={player.id} />
                        <br />
                        <br />
                      </>
                    );
                  })}
                  <br />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="team-r6" style={smallScreenData}>
            <div className="r6">
              <div className="r6-black-background">
                <br />
                <br />
                <h1 id="r6">{team.team.game}</h1>
                <div className="player-list-players">
                  <br />
                  {team.players.map((player) => {
                    return (
                      <>
                        <br />
                        <Player player={player} key={player.id} />
                        <br />
                        <br />
                      </>
                    );
                  })}
                  <br />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
