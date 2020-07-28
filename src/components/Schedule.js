import React from 'react'
import HomeLogo from '../assets/Zelos5.png'
import vsOutdone from '../assets/outdone_movement.png'
import vsFractured from '../assets/fractured.png'
import Fade from 'react-reveal/Fade';


export default function schedule() {


    return(
        <div className="event-section">
            <Fade bottom>
                <h1>Current Schedule</h1>
            </Fade>
            <Fade>
                <div className="schedule">
                    <div className="events">
                        <p>Pre Season League</p>
                        <p>July 29th | 6:45PM</p>
                        <p>Tom Clancy's Rainbow Six Siege</p>
                        <div className="vs">
                            <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                            <h2>     VS     </h2>
                            <img id="zelos-vs-logo" height="75" width="120"src={vsFractured} alt="Zelos Esports"></img>
                        </div>
                        <div className="vs-text">
                            <h4>Zelos</h4>
                            <h4>     |     </h4>
                            <h4>Fractured <br/> Memories</h4>
                        </div>
                    </div>
                    <div className="events">
                        <p>Pre Season League</p>
                        <p>July 30th | 7:00PM</p>
                        <p>Tom Clancy's Rainbow Six Siege</p>
                        <div className="vs">
                            <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                            <h2>     VS     </h2>
                            <img id="zelos-vs-logo" height="75" width="120"src={vsOutdone} alt="Zelos Esports"></img>
                        </div>
                        <div className="vs-text">
                            <h4>Zelos</h4>
                            <h4>     |     </h4>
                            <h4>OutDone <br/> Movement</h4>
                        </div>
                    </div>
                    <div className="events">
                        <p>Rocket League Qualifiers</p>
                        <p>August 10th | 12:24PM</p>
                        <p>Rocket League</p>
                        <div className="vs">
                            <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                            <h2>     VS     </h2>
                        </div>
                    </div>
                    <div className="events">
                        <p>RLCS X</p>
                        <p>September 7th | 12:24PM</p>
                        <p>Rocket League</p>
                        <div className="vs">
                            <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                            <h2>     VS     </h2>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )

}