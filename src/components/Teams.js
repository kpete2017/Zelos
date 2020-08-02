import React from 'react'
import Fade from 'react-reveal/Fade';
import './Teams.css'


export default function teams(props) {


    return(
        <>
            <Fade bottom>
                <h1 id="teams-text">The Zelos Elite</h1>
            </Fade>
            <Fade bottom>
                <div className="teams">
                    <div className="team-rl">
                        <div className="rl">
                            <h1 id="rl">Rocket League</h1>
                            <div>
                                <br/>
                                <div className="player" id="captain" onClick={() => props.teamPage()}>JoeYang</div>
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
                    <div className="team-r6">
                        <div className="r6">
                            <h1 id="r6">Tom Clancy's Rainbow Six Siege</h1>
                            <div>
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
                                <div className="player" onClick={() => props.teamPage()}>OffBrandPanda - Sub</div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )

}
