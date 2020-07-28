import React from 'react'
import logo from '../assets/Zelos7_3.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import './Header.css'

export default class HeaderContent extends React.Component {

    handleAboutClick = () => {
        window.scrollTo({
            top: 900,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleScheduleClick = () => {
        window.scrollTo({
            top: 2300,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleTeamClick = () => {
        window.scrollTo({
            top: 2900,
            left: 0,
            behavior: 'smooth'
        });
    }

    
    handleStoreClick = () => {
        window.scrollTo({
            top: 1800,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleTitleClick = () => {
        window.scrollTo({
            top: 0,
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
        return(
            <header>
                <div className="title-card">
                    <img src={logo} width="200" height="50" alt="Zelos Esports" onClick={this.handleTitleClick}></img>
                </div>
                <div className="nav">
                    <h4 id="nav-item" onClick={this.handleAboutClick}>ABOUT</h4>
                    <h4 id="nav-item">NEWS</h4>
                    <h4 id="nav-item">MEDIA</h4>
                    <h4 id="nav-item" onClick={this.handleStoreClick}>STORE</h4>
                    <h4 id="nav-item" onClick={this.handleScheduleClick}>SCHEDULE</h4>
                    <h4 id="nav-item" onClick={this.handleTeamClick}>TEAMS</h4>
                    <div className="plugs">
                        <img src={insta} width="35" height="35" alt="Zelos Esports" onClick={this.handleOnInstaClick} id="insta"></img>
                        <img src={twitter} width="35" height="35" alt="Zelos Esports" onClick={this.handleOnTwitterClick} id="twitter"></img>
                    </div>
                </div>
            </header>
        )
    }
}