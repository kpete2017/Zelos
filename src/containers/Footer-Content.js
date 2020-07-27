import React from 'react'
import logo from '../assets/Zelos_Denver_Hue.png'

export default class FooterContent extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="company">
                    <h4>COMPANY</h4>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Become a partner</p>
                    <p>Store</p>
                    <p>Privacy Policy</p>
                </div>
                <div className ="team-footer">
                    <h4>TEAMS</h4>
                    <p>Rocket League</p>
                    <p>Tom Clancy's Rainbw Six Siege</p>
                </div>
                <div className="social">
                    <h4>SOCIAL</h4>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <img id="zelos-footer-logo" height="400" width="600"src={logo} alt="Zelos Esports"></img>
            </div>
        )
    }
    
}