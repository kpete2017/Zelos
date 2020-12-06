import React from 'react'
import Fade from 'react-reveal/Fade';
import './Teams.css'
import { Link } from "react-router-dom";



export default function teams(props) {

    return(
        <div className="team-section-area" id="team">
            <Fade bottom>
                <h1 id="teams-text">The Zelos Elite</h1>
            </Fade>
            <Fade bottom>
                <div className="teams">
                    <div className="team-rl">
                        <div className="rl">
                            <div className="rl-black-background"> 
                                <br/>
                                <br/>
                                <h1 id="rl">Rocket League</h1>
                                <div className="player-list-players">
                                    <br/>
                                    <Link to="/teams" className="player">Joeyang</Link>
                                    <br/>
                                    <br/>
                                    <Link to="/teams" className="player">ReedTheZephyr</Link>
                                    <br/>
                                    <br/>
                                    <Link  to="/teams" className="player">Bonvie</Link>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Link to="/teams" className="player">justaboink- sub</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-r6">
                        <div className="r6">
                            <div className="r6-black-background">
                            <br/>
                            <br/>
                            <h1 id="r6">Tom Clancy's Rainbow Six Siege</h1>
                            <div className="player-list-players">
                                <br/>
                                <Link to="/teams" className="player" >Spooman -  Flex</Link>
                                <br/>
                                <br/>
                                <Link to="/teams" className="player">IanMoments - Fragger</Link>
                                <br/>
                                <br/>
                                 <Link to="/teams" className="player">Lxgan - Fragger</Link>
                                <br/>
                                <br/>
                                 <Link to="/teams" className="player">Blueberry - Support</Link>
                                <br/>
                                <br/>
                                 <Link to="/teams" className="player">Boxy - Support/IGL</Link>
                                <br/>
                                <br/>
                                <br/>
                                 <Link to="/teams" className="player">YaBoiTex - Analyst</Link>
                                <br/>
                                <br/>
                                 <Link to="/teams" className="player">Ace - Sub</Link>
                                <br/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )

}
