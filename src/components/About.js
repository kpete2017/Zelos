import React from 'react'
import Fade from 'react-reveal/Fade';
import './About.css'

export default class about extends React.Component {

    handleLearnMoreClick = () => {
        alert("Nothing to learn")
    }

    render() {
        return(
            <div className="about">
                <Fade bottom>
                <h1>"WE ARE ZELOS"</h1>
                <p>
                    Centralizing the three branches of esports; competition, content creation, and fashion, Zelos is a brand for all that are looking to bring people together, no matter their passion.
                    <br/>
                    <br/>
                    Headquartered in Colorado, Zelos is proud to represent the North American region as we compete against our international rivals. As esports continues to rise into the mainstream sports world, Zelos is working hard to innovate and provide fans with top of the line rosters, media content, and streetwear under an influential and compelling brand.
                </p>
                <h2 onClick={this.handleLearnMoreClick}>LEARN MORE</h2>
                </Fade>
            </div>
        )
    }
}