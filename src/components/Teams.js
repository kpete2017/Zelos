import React from 'react'
import Fade from 'react-reveal/Fade';
import './Teams.css'


export default function schedule() {


    return(
        <>
            <Fade bottom>
                <h1 id="teams-text">The Zelos Squads</h1>
            </Fade>
            <Fade bottom>
                <div className="teams">
                    <div className="team-rl">
                        <div className="rl">
                            <h1 id="rl">Rocket League</h1>
                        </div>
                    </div>
                    <div className="team-r6">
                        <div className="r6">
                            <h1 id="r6">Tom Clancy's Rainbow Six Siege</h1>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )

}