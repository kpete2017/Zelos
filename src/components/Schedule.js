import React from 'react'
import HomeLogo from '../assets/Zelos5.png'
import comingSoon from '../assets/ZEL-Placeholder-schedule.png'
import Fade from 'react-reveal/Fade';
import Event1 from '../only_open_this_folder_to_edit/event1'
import Event2 from '../only_open_this_folder_to_edit/event2'
import Event3 from '../only_open_this_folder_to_edit/event3'
import Event4 from '../only_open_this_folder_to_edit/event4'
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
                            <Event1 />
                            <Event2 />
                            <Event3 />
                            <Event4 />
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