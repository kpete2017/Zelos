import React from 'react'
import './About-Page.css'
import WeirdFace from '../assets/placeholder.png'
import Fade from 'react-reveal/Fade';
import logo from '../assets/Zelos2.png'
import Twitch from '../components/Twitch'

export default function AboutContent(props) {
    return(
        <div className="about-page">
            <Fade>
                <div className="intro-section">
                    <h1 id="what-is-zelos">What is Zelos?</h1>
                    <img id="zelos-about-logo" height="400" width="500"src={logo} alt="Zelos Esports"></img>
                    <h4 id="about-zelos-text">Founded in 2020 by Joe "JoeYang" Dikeman, Zelos aims to build a community in Colorado focused on competition, content creation, and fashion</h4>
                </div>
            </Fade>
            <Fade bottom>
                <div className="founders-section">
                <h1 id="founders-text">Company Founders</h1>
                    <div className="business">
                        <div className="people" id="joey">
                            <h2>Joey Dikeman <br/>-<br/>Founder/CEO</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people" id="lamar">
                            <h2>Lamar Chhetry <br/>-<br/> Lead Marketing</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people" id="garret">
                            <h2>Garret Gallant <br/>-<br/> CTO</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people" id="nate">
                            <h2>Reed Major <br/>-<br/> Rocket League Manager</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people" id="nate">
                            <h2>Nate Spomer <br/>-<br/> Rainbow Six Manager</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="company-info">
                    <div className="background-black">
                        <h2 id="current-games">Current Games we participate in</h2>
                        <div className="games">
                            <p>Tom Clancy's Rainbow Six Siege</p>
                            <p>Rocket League</p>
                            <p>Valorant</p>
                        </div>
                        <h2>Contact</h2>
                        <div id="contact-about">
                            <p>
                                Email: ZelosCompete@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            {/* <Twitch/> */}
        </div>
    )
}
