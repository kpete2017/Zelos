import React from 'react'
import './Team-Page.css'
import Fade from 'react-reveal/Fade';
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'
import FooterContent from './Footer-Content'



export default function TeamContent(props) {
    return(
        <Fade>
        <div className="team-page">
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
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/BoxyFPS")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/BoxyFPS")}}></img>
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
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => { window.open("https://www.instagram.com/yaboiitex/")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/YaBoiiTex")}}></img>
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
            <br/>
            <br/>


            <div className="header-banner2">
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
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => { window.open("https://www.instagram.com/bonvierl/?hl=en")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => { window.open("https://twitter.com/bonvierl")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => { window.open("https://www.twitch.tv/seanbonvie")}}></img>
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

            <br/>
            <br/>
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
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/patchval")}}></img>
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
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta" onClick={ () => {window.open("https://www.instagram.com/ceuos/")}}></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://www.twitter.com/ceuos_")}}></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/ceuos")}}></img>
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
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter" onClick={ () => {window.open("https://twitter.com/werd_ZEL")} }></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={ () => {window.open("https://www.twitch.tv/werd_zel")} }></img>
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
            <br/>
            <br/>
            <FooterContent />
        </div>
        </Fade>
    )
}



