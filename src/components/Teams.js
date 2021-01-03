import React from "react";
import Fade from "react-reveal/Fade";
import "./Teams.css";
import { Link } from "react-router-dom";

export default function teams({ home }) {
  return (
    <div className="team-section-area" id="team">
      <Fade bottom>
        <h1 id="teams-text">The Zelos Elite</h1>
      </Fade>
      <Fade bottom>
        <div className="teams">
          <div className="team-rl">
            <div className="rl">
              <div className="rl-black-background">
                <br />
                <br />
                <h1 id="rl">Rocket League</h1>
                <div className="player-list-players">
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster1_player1}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster1_player2}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster1_player3}
                  </Link>
                  <br />
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster1_player4}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-r6">
            <div className="r6">
              <div className="r6-black-background">
                <br />
                <br />
                <h1 id="r6">Tom Clancy's Rainbow Six Siege</h1>
                <div className="player-list-players">
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player1}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player2}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player3}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player4}
                  </Link>
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player5}
                  </Link>
                  <br />
                  <br />
                  <br />
                  <Link to="/teams" className="player">
                    {home.roster2_player6}
                  </Link>
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
