import React, {Component} from 'react'
import HomeLogo from '../assets/Zelos5.png'
import comingSoon from '../assets/ZEL-Placeholder-schedule.png'

export default function Event4() {
    return(
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
    )
}