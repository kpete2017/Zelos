import React from 'react'
import logo from '../assets/Zelos7_3.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'
import MobielNav from '../components/MobileNav'
import { Link } from "react-router-dom";

import './Header.css'

export default class HeaderContent extends React.Component {
    
    render() {
        let width = window.innerWidth;
        if (width > 768) {
            return(
                <header>
                    <div className="title-card">
                        <img id="zelos-header-logo" src={logo} width="200" height="50" alt="Zelos Esports"></img>
                    </div>
                    <div className="nav">
                        <Link to="/" id="nav-item">Home</Link>
                        <Link to="/about" id="nav-item">About</Link>
                        <Link to="/store" id="nav-item">Store</Link>
                        <Link to="/teams" id="nav-item">Teams</Link>
                        <div className="plugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" onClick={() => window.open("https://www.instagram.com/zeloscompete/")} id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" onClick={() => window.open("https://twitter.com/ZelosCompete")} id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={() => window.open("https://www.twitch.tv/zeloscompete")}></img>
                        </div>
                    </div>
                </header>
            )
        } else {
            return(
                <header id="mobile-header">
                    <div className="title-card">
                        <img id="zelos-header-logo" src={logo} width="200" height="50" alt="Zelos Esports"></img>
                    </div>
                    <div className="hamburger">
                        <MobielNav />
                    </div>
                </header>
            )
        }
    }
}
