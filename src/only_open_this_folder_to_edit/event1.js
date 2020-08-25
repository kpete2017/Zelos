import React, {Component} from 'react'
import HomeLogo from '../assets/Zelos5.png'
import comingSoon from '../assets/ZEL-Placeholder-schedule.png'

export default function Event1() {
    return(
        <div className="events">
            <p>Pre Season League</p>
            <p>TBD</p>
            <p>Tom Clancy's Rainbow Six Siege</p>
            <div className="vs">
                <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                <h2>VS</h2>
                <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
            </div>
        </div>
    )
}