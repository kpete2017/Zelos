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
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat</p>
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
                        <p className="bio">Hey Whats up  i am ian, im a mechanic and i play r6 other than that drive fast, eat grass, smoke ass!</p>
                    </div>
                    <div className="column3">
                        <img className="team-headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>Logan Cole</p>
                        <h2>Lxgan</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/lxganr6/")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/LxganR")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/lxganr6")}}></img>
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
                        <p>Alan Holguin</p>
                        <h2>Blueberry</h2>
                        <div className="playerplugs">
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/Blueberry4843")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/ya_boy_blueberry") }}></img>
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
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>OffBrandPanda</h2>
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
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat</p>
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
                        <p>Sean Bonvie</p>
                        <h2>Bonvie</h2>
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
                        <p>Justin Greer</p>
                        <h2>justaboink</h2>
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
            </div>
        </div>
        </Fade>
    )
}



