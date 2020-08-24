import React from 'react'
import Fade from 'react-reveal/Fade';
import './Teams.css'


export default function teams(props) {


    return(
        <div className="team-section-area">
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
                                <div class="player-list-players">
                                    <br/>
                                    <div className="player" id="captain" onClick={() => props.teamPage()}>Joeyang</div>
                                    <br/>
                                    <br/>
                                    <div className="player" onClick={() => props.teamPage()}>ReedTheZephyr</div>
                                    <br/>
                                    <br/>
                                    <div className="player" onClick={() => props.teamPage()}>Bonvie</div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="player" onClick={() => props.teamPage()}>justaboink- sub</div>
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
                                <div className="player" id="captain" onClick={() => props.teamPage()}>Spooman -  Flex</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>IanMoments - Fragger</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Lxgan - Fragger</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Blueberry - Support</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Boxy - Support/IGL</div>
                                <br/>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>YaBoiTex - Analyst</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Ace - Sub</div>
                                <br/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-valorant">
                        <div className="valorant">
                            <div className="valorant-black-background">
                            <br/>
                            <br/>
                            <h1 id="r6">Valorant</h1>
                            <div className="player-list-players">
                                <br/>
                                <div className="player" id="captain" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
                                <br/>
                                <br/>
                                <div className="player" onClick={() => props.teamPage()}>Player</div>
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
