import React from 'react'
import logo from '../assets/Zelos7_3.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import './Header.css'

export default class HeaderContent extends React.Component {

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
                    <img src={logo} width="200" height="50" alt="Zelos Esports" onClick={() => this.props.titlePage()}></img>
                </div>
                <div className="nav">
                <h4 id="nav-item" onClick={() => this.props.titlePage()}>HOME</h4>
                    <h4 id="nav-item" onClick={() => this.props.aboutPage()}>ABOUT</h4>
                    <h4 id="nav-item" onClick={() => this.props.mediaPage()}>MEDIA</h4>
                    <h4 id="nav-item" onClick={() => this.props.storePage()}>STORE</h4>
                    <h4 id="nav-item" onClick={() => this.props.teamPage()}>TEAMS</h4>
                    <div className="plugs">
                        <img src={insta} width="35" height="35" alt="Zelos Esports" onClick={this.handleOnInstaClick} id="insta"></img>
                        <img src={twitter} width="35" height="35" alt="Zelos Esports" onClick={this.handleOnTwitterClick} id="twitter"></img>
                    </div>
                </div>
            </header>
        )
    }
}