import React from "react";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import twitch from "../assets/twitch.png";

export default function RocketTeam({ team, refProp }) {
  return (
    <>
      <div className="header-banner2" ref={refProp} id="rl-banner">
        <h1>Rocket League</h1>
      </div>
      <div className="rlteam">
        <div id="player-card">
          <div className="column1">
            <p>{team.rl1_name}</p>
            <h2>{team.rl1_tag}</h2>
            <div className="playerplugs">
              <img
                src={insta}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="insta"
                onClick={() => {
                  window.open(team.rl1_insta);
                }}
              ></img>
              <img
                src={twitter}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitter"
                onClick={() => {
                  window.open(team.rl1_twitter);
                }}
              ></img>
              <img
                src={twitch}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitch"
                onClick={() => {
                  window.open(team.rl1_twitch);
                }}
              ></img>
            </div>
          </div>
          <div className="column2">
            <p className="bio">{team.rl1_desc}</p>
          </div>
          <div className="column3">
            {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
          </div>
        </div>
        <div id="player-card">
          <div className="column1">
            <p>{team.rl2_name}</p>
            <h2>{team.rl2_tag}</h2>
            <div className="playerplugs">
              <img
                src={insta}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="insta"
                onClick={() => {
                  window.open(team.rl2_insta);
                }}
              ></img>
              <img
                src={twitter}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitter"
                onClick={() => {
                  window.open(team.rl2_twitter);
                }}
              ></img>
              <img
                src={twitch}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitch"
                onClick={() => {
                  window.open(team.rl2_twitch);
                }}
              ></img>
            </div>
          </div>
          <div className="column2">
            <p className="bio">{team.rl2_desc}</p>
          </div>
          <div className="column3">
            {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
          </div>
        </div>
        <div id="player-card">
          <div className="column1">
            <p>{team.rl3_name}</p>
            <h2>{team.rl3_tag}</h2>
            <div className="playerplugs">
              <img
                src={insta}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="insta"
                onClick={() => {
                  window.open(team.rl3_insta);
                }}
              ></img>
              <img
                src={twitter}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitter"
                onClick={() => {
                  window.open(team.rl3_twitter);
                }}
              ></img>
              <img
                src={twitch}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitch"
                onClick={() => {
                  window.open(team.rl3_twitch);
                }}
              ></img>
            </div>
          </div>
          <div className="column2">
            <p className="bio">{team.rl3_desc}</p>
          </div>
          <div className="column3">
            {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
          </div>
        </div>
        <div id="player-card">
          <div className="column1">
            <p>{team.rl4_name}</p>
            <h2>{team.rl4_tag}</h2>
            <div className="playerplugs">
              <img
                src={insta}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="insta"
                onClick={() => {
                  window.open(team.rl4_insta);
                }}
              ></img>
              <img
                src={twitter}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitter"
                onClick={() => {
                  window.open(team.rl4_twitter);
                }}
              ></img>
              <img
                src={twitch}
                width="35"
                height="35"
                alt="Zelos Esports"
                id="twitch"
                onClick={() => {
                  window.open(team.rl4_twitch);
                }}
              ></img>
            </div>
          </div>
          <div className="column2">
            <p className="bio">{team.rl4_desc}</p>
          </div>
          <div className="column3">
            {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
          </div>
        </div>
      </div>
    </>
  );
}
