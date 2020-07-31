import React from 'react'
import logo from '../assets/Zelos_Denver_Hue.png'
import './Store-Page.css'
import tee1 from '../assets/Zelos_Long_Sleeve.jpg'
import tee2 from '../assets/unknown.png'
import tee3 from '../assets/Zelos_Winbreaker_1.png'

export default function StoreContent(props) {
    return(
        <div className="store-page">
            <div className="black-background">
                <img id="zelos-store-logo" height="300" width="500"src={logo} alt="Zelos Esports"></img>
                <h1 id="zelos-merch-text">Current Zelos Merch</h1>
                <div className="store-background-section">
                    <div className="store-section2">
                        <div className="featured-items">
                        <div className="featured-item">
                            <img id="tee-1" height="200" width="400"src={tee1} alt="Zelos Esports"></img>
                            <h4 className="item-desc">Zelos Long Sleeve</h4>
                            <h4 className="purchase-button">Purchase</h4>
                        </div>
                        <div className="featured-item">
                            <img id="tee-2" height="200" width="400"src={tee2} alt="Zelos Esports"></img>
                            <h4 className="item-desc">Poseidon Collection 2020 Jersey</h4>
                            <h4 className="purchase-button">Purchase</h4>
                        </div>
                        <div className="featured-item">
                            <img id="tee-3" height="200" width="400"src={tee3} alt="Zelos Esports"></img>
                            <h4 className="item-desc">Zelos Windbreaker</h4>
                            <h4 className="purchase-button">Purchase</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
