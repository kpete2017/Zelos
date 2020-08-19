import React from 'react'
import sponsor1 from '../assets/AOR-Teal-on-black.png'
import sponsor2 from '../assets/ICS-white-on-black.png'
import sponsor3 from '../assets/ROGUE-ENERGY-WEB-SPLASH.png'
import './Sponsor.css'


export default class Sponsor extends React.Component {

    render() {
        return(
            <div className="sponsors-section">
                <h1>Our Partners</h1>
                <div className="sponsors">
                    <img id="sponsor1" height="150" width="150"src={sponsor1} alt="Zelos Esports"></img>
                    <img id="sponsor2" height="150" width="150"src={sponsor2} alt="Zelos Esports"></img>
                    <img id="sponsor3" height="150" width="150"src={sponsor3} alt="Zelos Esports"></img>
                </div>
            </div>
        )
    }
}