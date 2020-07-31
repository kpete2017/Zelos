import React from 'react'
import logo from '../assets/Zelos7_3.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'
import './Header.css'

export default class HeaderContent extends React.Component {
    render() {
        return(
            <header>
                <div className="title-card">
                    <img id="zelos-header-logo" src={logo} width="200" height="50" alt="Zelos Esports" onClick={() => this.props.titlePage()}></img>
                </div>
                <div className="nav">
                    <h4 id="nav-item" onClick={() => this.props.titlePage()}>HOME</h4>
                    <h4 id="nav-item" onClick={() => this.props.aboutPage()}>ABOUT</h4>
                    {/* <h4 id="nav-item" onClick={() => this.props.mediaPage()}>MEDIA</h4> */}
                    <h4 id="nav-item" onClick={() => this.props.storePage()}>STORE</h4>
                    <h4 id="nav-item" onClick={() => this.props.teamPage()}>TEAMS</h4>
                    <div className="plugs">
                        <img src={insta} width="35" height="35" alt="Zelos Esports" onClick={() => window.open("https://www.instagram.com/zeloscompete/")} id="insta"></img>
                        <img src={twitter} width="35" height="35" alt="Zelos Esports" onClick={() => window.open("https://twitter.com/ZelosCompete")} id="twitter"></img>
                        <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch" onClick={() => window.open("https://www.twitch.tv/zeloscompete")}></img>
                    </div>
                </div>
            </header>
        )
    }
}
