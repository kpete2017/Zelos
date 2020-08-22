import React from 'react'
import HomeLogo from '../assets/Zelos5.png'
// import vsOutdone from '../assets/outdone_movement.png'
// import vsFractured from '../assets/fractured.png'
import comingSoon from '../assets/ZEL-Placeholder-schedule.png'
import Fade from 'react-reveal/Fade';
import './Schedule.css'


export default class schedule extends React.Component {
    
    render() {
        
        let width = window.innerWidth;
        if (width > 768) {
            return(
                <div className="event-section">
                    <Fade bottom>
                        <h1>Current Schedule</h1>
                    </Fade>
                    <Fade>
                        <div className="schedule">
                            <div className="events">
                                <p>Pre Season League</p>
                                <p>TBD</p>
                                <p>Tom Clancy's Rainbow Six Siege</p>
                                <div className="vs">
                                    <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                                    <h2>     VS     </h2>
                                    <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
                                </div>
                                <div className="vs-text">
                                    {/* <h4>Zelos</h4> */}
                                    {/* <h4>  |  </h4> */}
                                    {/* <h4>TEAM <br/> NAME</h4> */}
                                </div>
                            </div>
                            <div className="events">
                                <p>Pre Season League</p>
                                <p>TBD</p>
                                <p>Tom Clancy's Rainbow Six Siege</p>
                                <div className="vs">
                                    <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                                    <h2>     VS     </h2>
                                    <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
                                </div>
                                <div className="vs-text">
                                    {/* <h4>Zelos</h4> */}
                                    {/* <h4>     |     </h4> */}
                                    {/* <h4>OutDone <br/> Movement</h4> */}
                                </div>
                            </div>
                            <div className="events">
                                <p>Rocket League Qualifiers</p>
                                <p>TBD</p>
                                <p>Rocket League</p>
                                <div className="vs">
                                    <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                                    <h2>     VS     </h2>
                                    <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
                                </div>
                            </div>
                            <div className="events">
                                <p>RLCS X</p>
                                <p>September 7th | 12:24PM</p>
                                <p>Rocket League</p>
                                <div className="vs">
                                    <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                                    <h2>     VS     </h2>
                                    <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        }   
        else {
            return(
                <div className="event-section">
                    <Fade bottom>
                        <h1>Next Game</h1>
                    </Fade>
                    <Fade>
                        <div className="schedule">
                            <div className="events">
                                <p>Pre Season League</p>
                                <p>TBD</p>
                                <p>Tom Clancy's Rainbow Six Siege</p>
                                <div className="vs">
                                    <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                                    <h2>     VS     </h2>
                                    <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        }
    }
}