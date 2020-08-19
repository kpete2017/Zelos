import React from 'react'
import './Team-Page.css'
import Fade from 'react-reveal/Fade';
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'
import WeirdFace from '../assets/placeholder.png'


export default function TeamContent(props) {
    return(
        <Fade>
        <div className="team-page">
            <div className="header-banner">
                <div className="gradient-div">
                    <h1>Tom Clancy's Rainbow Six Siege</h1>
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
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Ian Bronson</p>
                        <h2>IanMoments</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey Whats up I am Ian, I'm a mechanic and I play Rainbow Six!"</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Logan Cole</p>
                        <h2>Splxsh</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/lxganr6/")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/LxganR")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/lxganr6")}}></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"I’ve been playing rainbow for about 3 or 4 years. And have about 1600 hours into the game. 
                                           I originally started on console and made the switch to pc. the thing I like about rainbow 
                                           is the movement isn’t super exaggerated and it allows for more interesting gunfights."</p>
                    </div>
                                        <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Alan Holguin</p>
                        <h2>Blueberry</h2>
                        <div className="playerplugs">
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/Blueberry4843")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/ya_boy_blueberry") }}></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"Hey :) my names Alan. I'm 18 and from Denver CO. I have tons of hours on games like csgo, overwatch, rainbow six, and many more. 
                                           I am really competitive and I'm currently trying my best to get into the world of Esports."</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
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
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
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
                        <p className="bio">sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris telecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="header-banner2">
                <div className="gradient-div2">
                    <h1>Rocket League</h1>
                </div>
            </div>
            <h4 className="players-r6">Players</h4>
            <div className="rlteam">
                <div id="player-card">
                    <div className="column1">
                        <p>Joey Dikeman</p>
                        <h2>JoeYang</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => { window.open("https://www.instagram.com/joey_dikeman99/")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/joey_dikeman")}}></img> 
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/joeyang_")}}></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio"> "I have been playing Rocket League since its release in 2015 and I've accumulated 3,000 hours. 
                                            This game has taken me across the continent having played in Dreamhack Rocket League Pro Circuit Dallas and Montreal. 
                                            I owe a lot to the game as it has given me a lot of close friends. Outside of Rocket League I want to develop Zelos as a 
                                            lifestyle brand as and after I finish competing."</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Reed Major</p>
                        <h2>ReedTheZephyr</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/ReedTheZephyr")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/reedthezephyr")}}></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"I've been playing video games for a lot of my life and have made so many friends through them. 
                                           I always try to be the best in every game that I have played and so now I'm trying to be the best that I can at rocket league. 
                                           Going to college for computer science and I plan to continue playing video games competitively throughout."</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Sean Bonvie</p>
                        <h2>Bonvie</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is Sean and I am from Nova Scotia, Canada. I started playing Rocket League in 2017 and very quickly developed a passion for the game. 
                                           Outside of gaming I am in my forth year of university majoring in Accounting. 
                                           Zelos is the first organization I have ever been apart of and I have met some great people because of it."</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Justin Greer</p>
                        <h2>justaboink</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is justin, and in game I go by “justaboink”. It was a nickname my uncle gave me a long time ago. 
                        I am a University of Colorado grad, and am currently in the process of applying to University of Washington Law School. 
                        I also play as the sub for Zelos in this flying car ball game every once in a while. #ZelosCompete</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}



