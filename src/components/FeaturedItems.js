import React from 'react'
import tee1 from '../assets/Zelos_Long_Sleeve.jpg'
import tee2 from '../assets/unknown.png'
import tee3 from '../assets/Zelos_Winbreaker_1.png'
import Fade from 'react-reveal/Fade';



export default function FeaturedItems() {


    return(
        <Fade>
            <div className="store-section">
                <h1 id="team-speak">Become part of the team</h1>
                <div className="featured-items">
                    <div className="item">
                        <img id="tee-1" height="200" width="400"src={tee1} alt="Zelos Esports"></img>
                        <h4 className="item-desc">Sick Nasty makes you cool shirt</h4>
                    </div>
                    <div className="item">
                        <img id="tee-2" height="200" width="400"src={tee2} alt="Zelos Esports"></img>
                        <h4 className="item-desc">The fuck you give me money collection</h4>
                    </div>
                    <div className="item">
                        <img id="tee-3" height="200" width="400"src={tee3} alt="Zelos Esports"></img>
                        <h4 className="item-desc">The Awesome guys buy this collection</h4>
                    </div>
                </div>
            </div>
        </Fade>
    )

}