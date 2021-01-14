import React from "react";
import Fade from "react-reveal/Fade";
import Player from "./player";
import "./Teams.css";

export default function Teams({ home, team }) {
  return (
    <div className="team-section-area" id="team">
      <Fade bottom>
        <div className="teams">
          <div className="team-r6" style={{backgroundImage: `url(${team.team.front_page_image})`, backgroundAttachment: "fixed", backgroundSize: "cover"}}>
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
                        <Player player={player} key={player.id}/>
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
        </div>
      </Fade>
    </div>
  );
}
