import React, {Component} from 'react'
import HomeLogo from '../assets/Zelos5.png'
import comingSoon from '../assets/ZEL-Placeholder-schedule.png'

export default function Event1() {
    return(
        <div className="events">
            {/* This is for the title of the event */}
            <p id="Event-Title">Pre Season League</p>
            {/* This is for the date of the event */}
            <p id="Time-of-Event">TBD</p>
            {/* This is the Game being played */}
            <p id="Name-of-Game">Tom Clancy's Rainbow Six Siege</p>
            {/* This is the home and vs logos */}
            <div className="vs">
                <img id="zelos-home-logo" height="75" width="120"src={HomeLogo} alt="Zelos Esports"></img>
                <h2>VS</h2>
                <img id="zelos-vs-logo" height="75" width="75"src={comingSoon} alt="Zelos Esports"></img>
            </div>
        </div>
    )
}