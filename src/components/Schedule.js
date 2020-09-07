import React from 'react'
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
                            <Event1/>
                        </div>
                    </Fade>
                </div>
            )
        }
    }
}