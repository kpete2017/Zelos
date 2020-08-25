import React, {Component} from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'

export default function RainbowTeam() {
    return (
        <>
            <div className="header-banner">
                <div className="gradient-div">
                    <h1 id="header-game-title">Tom Clancy's Rainbow Six Siege</h1>
                </div>
            </div>
            <h4 className="players-r6">Players</h4>
            <div className="r6team">
            <div id="player-card">
                    <div className="column1">
                        <p>Nate Spomer</p>
                        <h2>Spooman</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/nate_spomer/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/NateSpomer")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/spooman16")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"AKA Nate. Ive been playing Rainbow 6 Siege for 3 years now with over 2500 hours played. I love this game because it is different from all the other FPS game I've played so far. The depth and strategy really appeal to me. 
                                        I want to play Rainbow at the highest level possible but also have bigger goals in life, like getting a PhD in Astronomy. 
                                        Space is one of my many passions."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Ian Bronson</p>
                        <h2>IanMoments</h2>
                        <div className="playerplugs">
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/ianmoments")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/ianmoments")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey Whats up I am Ian, I'm a mechanic and I play Rainbow Six!"</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Logan Cole</p>
                        <h2>Splxsh</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/lxganr6/")} }></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/LxganR")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/lxganr6")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"I’ve been playing rainbow for about 3 or 4 years. And have about 1600 hours into the game. 
                                        I originally started on console and made the switch to pc. the thing I like about rainbow 
                                        is the movement isn’t super exaggerated and it allows for more interesting gunfights."</p>
                    </div>
                                        <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Alan Holguin</p>
                        <h2>Blueberry</h2>
                        <div className="playerplugs">
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/Blueberry4843")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/ya_boy_blueberry")} }></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey :) my names Alan. I'm 18 and from Denver CO. I have tons of hours on games like csgo, overwatch, rainbow six, and many more. 
                                        I am really competitive and I'm currently trying my best to get into the world of Esports."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Chase Anderson</p>
                        <h2>Boxy</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is Chase, I have lived in Colorado for my whole life and have been playing games for as long as I can remember 
                        starting my PvP roots in Destiny Trials where I reached top 100 Global, before I found a new game which peaked my interest, Rainbow 6 Siege, 
                        I've been playing since Velvet Shell on console and transferred to PC during Para Bellum and now I'm happy to say that I currently IGL for 
                        the Zelos R6 team."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Sean Houston</p>
                        <h2>YaBoiTex</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Name’s Sean I have about 500 hours in siege between console and PC, I’m a big fan of R6 pro league and all the 
                        theory behind competitive games. I am the analyst for the R6 team and whatever else I can help out with. Always striving to improve 
                        in the games I play, I’m very interested in the ever growing world in esports and want to work towards making a scene in Colorado."</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
            </div>
        </>
    )
}