import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'

export default function ValorantTeam(props) {

    

    return (
        <>
            <div className="header-banner3" ref={props.refProp} id="val-banner">
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
                            {/* <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("")} }></img> */}
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/patchval")} }></img>
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
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/ceuos/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://www.twitter.com/ceuos_")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/ceuos")} }></img>
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
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/zim.andrew/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/werd_ZEL")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/werd_zel")} }></img>
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
                        <p>Quentin Ace</p>
                        <h2>Q.</h2>
                        <div className="playerplugs">
                            {/* <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("")} }></img> */}
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/luvquentinn")} }></img>
                            {/* <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("")} }></img> */}
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey I'm Quentin but my friends call me "Q" and I started playing Valorant in beta. 
                        Once the game released I realized that I wanted to grind and become the best. I hope I can make it to 
                        the top and learn a lot while playing for Zelos."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Cade Zimmerman</p>
                        <h2>Cade</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/cadevalorant/?hl=en")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is Cade and I play for the Zelos Valorant team. I started playing Valorant with my friends casually, 
                        and then i realized how much i was enjoying the game and now im pursueing a career with Zelos with all of my friends. 
                        I already know that the Zelos Valorant team is about to pop off and win millions off this game."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
            </div>
        </>
    )
}