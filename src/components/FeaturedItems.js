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
                    <div className="featured-items">
                        <div className="coming-soon-placeholder">
                            <img id="merch-soming-soon-home-page" src={merchComingSoon} alt=""></img>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )

}
