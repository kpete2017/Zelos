import React from 'react'
import sponsor1 from '../assets/THINKAOR.PNG'
import sponsor2 from '../assets/Iron_Cross_Sponsor.jpg'


export default class Sponsor extends React.Component {


    render() {
        return(
            <div className="sponsors-section">
                <h1>Our Partners</h1>
                <div className="sponsors">
                    <img id="sponsor1" height="100" width="100"src={sponsor1} alt="Zelos Esports"></img>
                    <img id="sponsor2" height="100" width="100"src={sponsor2} alt="Zelos Esports"></img>
                </div>
            </div>
        )
    }
}