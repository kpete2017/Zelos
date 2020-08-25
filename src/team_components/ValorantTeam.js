import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'

export default function ValorantTeam() {
    return (
        <>
            <div className="header-banner3">
                <div className="gradient-div">
                    <h1>Valorant</h1>
                </div>
            </div>
            <h4 className="players-valorant">Players</h4>
            <div className="valorantteam">
            <div id="player-card">
                    <div className="column1">
                        <p>Austin Le</p>
                        <h2>Patch</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is Austin and I'm the IGL for the Zelos Valorant Team. I used to be an average casual gamer prior to the release of Valorant. 
                        After spending countless hours on Valorant, I realized that I was better than the average head-clicker. 
                        I am now pursuing a professional career with the Zelos Valorant team. I hope to achieve great things under the Zelos name."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Avriel Valdivieso</p>
                        <h2>Ceuos</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey my name is Avriel but my friends call me "Ceuos" ( Sue-Ohs ) and I've been playing video games pretty much all my life, 
                        constantly looking for a way to get into the Esports scene as I am very competitive and it's been my lifelong dream to become a part of Esports some day. 
                        Been going game to game playing competitively and I'm hoping Valorant will be the place for me as I go through this journey with Zelos (:"</p>
                    </div>
                                        <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Drew Zimmerman</p>
                        <h2>Werd</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My names Andrew or Drew and I'm 17 and I'm excited to see where this team takes me. 
                        I've been playing Valorant since beta and I can't wait for this Esports scene to grow even bigger."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Username</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Username</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
            </div>
        </>
    )
}