import React from 'react'
import Fade from 'react-reveal/Fade';
import './Teams.css'


export default function schedule() {


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
                                <div className="player" id="captain">JoeYang</div>
                                <br/>
                                <br/>
                                <div className="player">ReedTheZephyr</div>
                                <br/>
                                <br/>
                                <div className="player">Bonvie</div>
                                <br/>
                                <br/>
                                <br/>
                                <div className="player">justaboink- sub</div>
                            </div>
                        </div>
                    </div>
                    <div className="team-r6">
                        <div className="r6">
                            <h1 id="r6">Tom Clancy's Rainbow Six Siege</h1>
                            <div>
                                <br/>
                                <div className="player" id="captain">Spooman -  Flex</div>
                                <br/>
                                <br/>
                                <div className="player">IanMoments - Fragger</div>
                                <br/>
                                <br/>
                                <div className="player">Lxgan - Fragger</div>
                                <br/>
                                <br/>
                                <div className="player">Blueberry - Support</div>
                                <br/>
                                <br/>
                                <div className="player">Boxy - Support/IGL</div>
                                <br/>
                                <br/>
                                <br/>
                                <div className="player">YaBoiTex - Analyst</div>
                                <br/>
                                <div className="player">OffBrandPanda - Sub</div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )

}
