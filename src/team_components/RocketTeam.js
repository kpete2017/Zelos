import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'

export default function RocketTeam(props) {
    return(
        <>
            <div className="header-banner2" ref={props.refProp} id="rl-banner">
                <h1>Rocket League</h1>
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
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Reed Major</p>
                        <h2>ReedTheZephyr</h2>
                        <div className="playerplugs">
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
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
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
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Justin Greer</p>
                        <h2>justaboink</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => { window.open("https://www.instagram.com/justin.tg")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://www.twitter.com/justin_tg42")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/justaboink")}}></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">"My name is justin, and in game I go by “justaboink”. It was a nickname my uncle gave me a long time ago. 
                        I am a University of Colorado grad, and am currently in the process of applying to University of Washington Law School. 
                        I also play as the sub for Zelos in this flying car ball game every once in a while. #ZelosCompete"</p>
                    </div>
                    <div className="column3">
                        {/* <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                    </div> 
                </div>
            </div>
        </>
    )
}