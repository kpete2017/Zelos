import React from 'react'
import logo from '../assets/Zelos_Denver_Hue.png'
import './Footer.css'

export default class FooterContent extends React.Component {

    handleAboutClick = () => {
        window.scrollTo({
            top: 900,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleOnInstaClick = () => {
        window.open('https://www.instagram.com/zeloscompete/')
    }

    handleOnTwitterClick = () => {
        window.open('https://twitter.com/ZelosCompete')
    }


    render() {

        let width = window.innerWidth;
        if (width > 768) {
            return (
                <div className="footer">
                    <div className="company">
                        <h4>COMPANY</h4>
                        <p onClick={this.handleAboutClick}>About</p>
                        <p>Contact</p>
                        <p>Become a partner</p>
                        <p>Store</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className ="team-footer">
                        <h4>TEAMS</h4>
                        <p>Rocket League</p>
                        <p>Tom Clancy's Rainbow Six Siege</p>
                        <p>Valorant</p>
                    </div>
                    <div className="social">
                        <h4>SOCIAL</h4>
                        <p onClick={this.handleOnInstaClick}>Instagram</p>
                        <p onClick={this.handleOnTwitterClick}>Twitter</p>
                    </div>
                    <img id="zelos-footer-logo" height="400" width="600"src={logo} alt="Zelos Esports"></img>
                </div>
            )
        } else {
            return (
                <div className="footer">
                    <div className="company">
                        <h4>COMPANY</h4>
                        <p onClick={this.handleAboutClick}>About</p>
                        <p>Contact</p>
                        <p>Become a partner</p>
                        <p>Store</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className ="team-footer">
                        <h4>TEAMS</h4>
                        <p>Rocket League</p>
                        <p>Tom Clancy's Rainbow Six Siege</p>
                        <p>Valorant</p>
                    </div>
                    <div className="social">
                        <h4>SOCIAL</h4>
                        <p onClick={this.handleOnInstaClick}>Instagram</p>
                        <p onClick={this.handleOnTwitterClick}>Twitter</p>
                    </div>
                </div>
            )
        }
    }
    
}
