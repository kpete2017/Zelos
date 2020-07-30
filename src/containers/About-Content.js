import React from 'react'
import './About-Page.css'
import WeirdFace from '../assets/WeirdFace.jpg'
import Fade from 'react-reveal/Fade';

export default function AboutContent(props) {
    return(
        <div className="about-page">
            <Fade>
                <h1>What is Zelos?</h1>
                <h4 id="about-zelos-text">Founded in 2018 by Joe "JoeYang" Dikeman, Zelos aims to build a community in Colorado focused on competition, content creation, and fashion</h4>
            </Fade>
            <Fade bottom>
                <h1 id="founders-text">Company Founders</h1>
                <div className="business">
                    <div className="people" id="joey">
                        <h2>Joey Dikeman <br/>-<br/>Founder</h2>
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                    <div className="people" id="lamar">
                        <h2>Lamar Chhetry <br/>-<br/> Lead Marketing</h2>
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                    <div className="people" id="garret">
                        <h2>Garret Gallant <br/>-<br/> CTO</h2>
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                    <div className="people" id="nate">
                        <h2>Nate Spomer <br/>-<br/> Manager</h2>
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                    <div className="people" id="nate">
                        <h2>Ian Loudboi <br/>-<br/>Investor</h2>
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <h2 id="current-games">Current Games we participate in</h2>
                <div className="games">
                    <p>Tom Clancy's Rainbow Six Siege</p>
                    <p>Rocket League</p>
                </div>
            </Fade>
            <Fade bottom>
                <h2>Mailing address</h2>
                <div id="mailing">
                    <p> 1234 S Street St <br/> Littleton, CO 80128</p>
                </div>
            </Fade>
            <Fade bottom>
                <h2>Conact</h2>
                <div id="contact-about">
                    <p>
                        Phone: 123-456-7891
                        <br/>
                        Email: fakeEmail@gmail.com
                    </p>
                </div>
            </Fade>
        </div>
    )
}
