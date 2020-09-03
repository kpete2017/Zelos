import React from 'react'
// import tee1 from '../assets/Zelos_Long_Sleeve.jpg'
// import tee2 from '../assets/unknown.png'
// import tee3 from '../assets/Zelos_Winbreaker_1.png'
import merchComingSoon from '../assets/merch-coming-soon.png'
import Fade from 'react-reveal/Fade';
import './FeaturedItems.css'


export default function FeaturedItems() {


    return(
        <div className="store-section" id="store">
            <Fade>
                <div className="black-background">
                <h1 id="team-speak"></h1>
                <div className="featured-items">
                    <div className="coming-soon-placeholder">
                        <img id="merch-soming-soon-home-page" src={merchComingSoon} alt=""></img>
                    </div>
                    {/* <div className="featured-item">
                        <img id="tee-1" height="200" width="400"src={tee1} alt="Zelos Esports"></img>
                        <h4 className="item-desc">Zelos Long Sleeve</h4>
                        <h4 id="purchase-button">Purchase</h4>
                    </div>
                    <div className="featured-item">
                        <img id="tee-2" height="200" width="400"src={tee2} alt="Zelos Esports"></img>
                        <h4 className="item-desc">Poseidon Collection 2020 Jersey</h4>
                        <h4 id="purchase-button">Purchase</h4>
                    </div>
                    <div className="featured-item">
                        <img id="tee-3" height="200" width="400"src={tee3} alt="Zelos Esports"></img>
                        <h4 className="item-desc">Zelos Windbreaker</h4>
                        <h4 id="purchase-button">Purchase</h4>
                    </div> */}
                </div>
                </div>
            </Fade>
        </div>
    )

}
