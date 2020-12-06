import React from 'react'
import logo from '../assets/Zelos_Denver_Hue.png'
import './Store-Page.css'
import Fade from 'react-reveal/Fade';
import FooterContent from './Footer-Content'


export default class StoreContent extends React.Component {

    render() {
        let width = window.innerWidth;
        if (width > 768) {
            return(
                <Fade>
                <div className="store-page2">
                    <div className="black-background2">
                        <div className="store-background-section">
                            <div className="store-images">
                                <h1>Images Carosel</h1>
                            </div>
                            <div className="store-checkout">
                                <h1>checkout Area</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterContent />
                </Fade>
            )
        }  else {
            return (
                <div className="store-page2">
                    <div className="black-background2">
                        <div className="store-background-section">
                            <div className="store-section2">
                                <div className="coming-soon-placeholder-2">
                                    <h1 id="merch-coming-soon">Merchandise Coming Soon</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
