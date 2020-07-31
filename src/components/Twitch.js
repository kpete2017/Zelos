import React from 'react'
import './Twitch.css'

export default class twitch extends React.Component {

    state = {
        embedVid: true
    }

    handleClick = () => {
        this.setState({
            embedVid: false
        })
    }

    render() {
        if(this.state.embedVid === true) {
            return(
                <>
                <p id="exit" onClick={this.handleClick}>X</p>
                <iframe title="twitch" id="twitch-viewer" src="https://player.twitch.tv/?channel=zeloscompete&parent=zelos-a9142.web.app" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="500" autoplay="true"></iframe>
                </>
            ) 
        } else {
            return null
        }
    }
}
