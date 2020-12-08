import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'

export default function RainbowTeam({team}) {
    
    return (
        <>
            <div className="header-banner" id="r6-banner">
                <div className="gradient-div">
                    <h1 id="header-game-title">Tom Clancy's Rainbow Six Siege</h1>
                </div>
            </div>
            <div className="r6team">
            <div id="player-card">
                    <div className="column1">
                        <p>{team.rs1_name}</p>
                        <h2>{team.rs1_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs1_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>{team.rs2_name}</p>
                        <h2>{team.rs2_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs2_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>{team.rs3_name}</p>
                        <h2>{team.rs3_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs3_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>{team.rs4_name}</p>
                        <h2>{team.rs4_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs4_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>{team.rs5_name}</p>
                        <h2>{team.rs5_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs5_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>{team.rs6_name}</p>
                        <h2>{team.rs6_tag}</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">{team.rs6_desc}</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
            </div>
        </>
    )
}