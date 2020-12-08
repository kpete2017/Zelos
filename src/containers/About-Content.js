import React from 'react'
import './About-Page.css'
import Fade from 'react-reveal/Fade';
import logo from '../assets/Zelos2.png'

export default function AboutContent({about}) {
    let width = window.innerWidth;
    if (width > 768) {
        return(
            <div className="about-page">
                <Fade>
                    <div className="intro-section">
                        <h1 id="what-is-zelos">{about.about_page_title}</h1>
                        <img id="zelos-about-logo" height="400" width="500"src={logo} alt="Zelos Esports"></img>
                        <h4 id="about-zelos-text">{about.about_page_desc}</h4>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="founders-section">
                    <h1 id="founders-text">Company Founders</h1>
                        <div className="business">
                            <div className="people">
                                <h2>{about.founder1_title}<br/>-<br/>{about.founder1_desc}</h2>
                                {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                            </div>
                            <div className="people">
                                <h2>{about.founder2_title}<br/>-<br/>{about.founder2_desc}</h2>
                                {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                            </div>
                            <div className="people">
                                <h2>{about.founder3_title}<br/>-<br/>{about.founder3_desc}</h2>
                                {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                            </div>
                            <div className="people">
                                <h2>{about.founder4_title}<br/>-<br/>{about.founder4_desc}</h2>
                                {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                            </div>
                            <div className="people">
                                <h2>{about.founder5_title}<br/>-<br/>{about.founder5_desc}</h2>
                                {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="company-info">
                        <h2 className = "contact-info">For Questions Contact: </h2>
                        <div id="contact-about">
                        <p className="email-tag">Email: {about.email}</p>
                        </div>
                    </div>
                </Fade>
                <br/>
            </div>
        )
    } else {
        return(
            <div className="about-page">
                <div className="intro-section">
                    <h1 id="what-is-zelos">What is Zelos?</h1>
                    <img id="zelos-about-logo" height="400" width="500"src={logo} alt="Zelos Esports"></img>
                    <h4 id="about-zelos-text">Founded in 2020 by Joe "JoeYang" Dikeman, Zelos aims to build a community in Colorado focused on competition, content creation, and fashion</h4>
                </div>
                <div className="founders-section">
                <h1 id="founders-text">Company Founders</h1>
                    <div className="business">
                        <div className="people">
                            <h2>Joey Dikeman <br/>-<br/>Founder/CEO</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people">
                            <h2>Kyle Petersen <br/>-<br/> Lead Web Developer</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people">
                            <h2>Garret Gallant <br/>-<br/> CTO</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people">
                            <h2>Reed Major <br/>-<br/> Rocket League Manager</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                        <div className="people">
                            <h2>Nate Spomer <br/>-<br/> Rainbow Six Manager</h2>
                            {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }
}
