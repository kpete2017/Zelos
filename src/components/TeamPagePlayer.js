import React from 'react';
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import twitch from "../assets/twitch.png";

export default function TeamPagePlayer({player}) {
    return(
        <div id="player-card">
          <div className="column1">
            <p>{player.name}</p>
            <h2>{player.tag}</h2>
            <div className="playerplugs">
              <img
                src={insta}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="insta"
                onClick={() => {
                  window.open(player.insta);
                }}
              ></img>
              <img
                src={twitter}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitter"
                onClick={() => {
                  window.open(player.twitter);
                }}
              ></img>
              <img
                src={twitch}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitch"
                onClick={() => {
                  window.open(player.twitch);
                }}
              ></img>
            </div>
          </div>
          <div className="column2">
            <p className="bio">{player.desc}</p>
          </div>
          <div className="column3">
            {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
          </div>
        </div>
    )
}